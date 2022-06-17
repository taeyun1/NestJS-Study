import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board.status.enum.';
import {v1 as uuid} from 'uuid'; // uuid버전중에 v1버전 사용
import { CreatBoardDto } from './dto/cerate-board.dto';
import { BoardRepository } from './boadrd.reopsitory';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';

// BoardsService안에서 BoardRepository를 사용할 수 있게됨


// private boards: Board[] = [];
@Injectable()
export class BoardsService {
	constructor (
		@InjectRepository(BoardRepository)
		private boardReposirory: BoardRepository,
	) {}

	// // 모든 게시물 데이터 가져오기
	// // getAllBoards를 호출하면 boards배열에 있는 모든 값을 받을 수 있게
	// getAllBoards(): Board[] {
	// 	return this.boards;
	// }

	// // 게시물 ID는 유니크 해야함, 데이터베이스를 사용하면 알아서 해주지만,
	// // 로컬로 사용하면 임의로 유니크한 값을 줘야함, 여러방법이 있지만 uuid모듈을 이용해 유니크한값 주기.
	// createBoard(createBoardDto: CreatBoardDto) {
	// 	// const title = createBoardDto.title;
	// 	// const description = createBoardDto.description;
	// 	const {title, description} = createBoardDto; // 위랑 같음

	// 	const board: Board = {
	// 		id: uuid(), // 유니크한 id값
	// 		title, // title : title -> 이거랑 같음
	// 		description,
	// 		status: BoardStatus.PUBLIC // 기본값으로 
	// 	}

	// 	// 게시물을 작성하고, 게시물을 생성하면 boards 배열에 넣어줘야함
	// 	this.boards.push(board);
	// 	return board;
	// } 

	// // ID값으로 특정 게시물 가져오기(찾기)
	// getBoardById(id: string): Board {
	// 	 const found = this.boards.find((board) => board.id === id);

	// 	 // 특정 게시물을 ID로 가져올때 없는 ID의 게시물을 가져오면 없다고, 에러메세지 클라로 보내주기
	// 	 // 에러를 표출 해주기 위해서는 NotFoundException 예외 인스턴스를 생성하여 사용
	// 	 if(!found) {
	// 		 throw new NotFoundException(`${id}의 해당 게시물을 찾을 수 없습니다.`);
	// 	 }
	// 	 return found;
	// 	}

	// ID값으로 특정 게시물 가져오기(찾기)
	async getBoardById(id: number): Promise <Board> {
		const found = await this.boardReposirory.findOneBy({id});

		if(!found) {
			throw new NotFoundException(`${id}의 해당 게시물을 찾을 수 없습니다.`);
		}
		return found;
	}


	// // ID값으로 특정 게시물 삭제하기
	// deleteBoard(id: string): void {
	// 	// ID가 없는 게시물을 삭제하려고 할 때, getBoardById로 체크 후 에러값 날려 주기
	// 	// getBoardById를 이용해 지우려고 하는 게시물이 있는지 체크 후 있으면 지우고, 없으면 에러 문구 날리기
	// 	const found = this.getBoardById(id);
	// 	this.boards = this.boards.filter((board) => board.id !== found.id);
	// }

	// // 특정 게시물 상태 업데이트
	// updateBoardStatus(id: string, status: BoardStatus): Board {
	// 	const board = this.getBoardById(id); // 업데이트 하고자 하는 게시물의 모든 정보를 board에 할당
	// 	board.status = status; // 수정한 status를 board.status에 덮어씀
	// 	return board; // 업데이트된 게시물 반환
	// }
}
