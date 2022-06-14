import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
	private boards: Board[] = [];

	// 모든 게시물 데이터 가져오기
	// getAllBoards를 호출하면 boards배열에 있는 모든 값을 받을 수 있게
	getAllBoards(): Board[] {
		return this.boards;
	}
}
