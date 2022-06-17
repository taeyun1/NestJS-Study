import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board.status.enum.';

// 게시물을 위한 엔티티 생성하기

// @Entity() : class위에 @Entity를 넣어주세요 ~ 나중에 발견하고 수정합니다 ~
// @PrimaryGeneratedColumn() 데코레이터 클래스는 id 열이 Board 엔티티의 기본 키 열임을 나타내는데 사용됨.
// @Column() 데코레이터 클래스는 Board 엔티티의 title 및 description과 같은 다른 열을 나타내는데 사용됨.
export class Board extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	desctiprion: string;
	
	@Column()
	status: BoardStatus;
}

