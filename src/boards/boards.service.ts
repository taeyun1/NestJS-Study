import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import {v1 as uuid} from 'uuid'; // uuid버전중에 v1버전 사용
import { CreatBoardDto } from './dto/cerate-board.dto';

@Injectable()
export class BoardsService {
	private boards: Board[] = [];

	// 모든 게시물 데이터 가져오기
	// getAllBoards를 호출하면 boards배열에 있는 모든 값을 받을 수 있게
	getAllBoards(): Board[] {
		return this.boards;
	}

	// 게시물 ID는 유니크 해야함, 데이터베이스를 사용하면 알아서 해주지만,
	// 로컬로 사용하면 임의로 유니크한 값을 줘야함, 여러방법이 있지만 uuid모듈을 이용해 유니크한값 주기.
	createBoard(createBoardDto: CreatBoardDto) {
		// const title = createBoardDto.title;
		// const description = createBoardDto.description;
		const {title, description} = createBoardDto; // 위랑 같음

		const board: Board = {
			id: uuid(), // 유니크한 id값
			title, // title : title -> 이거랑 같음
			description,
			status: BoardStatus.PUBLIC // 기본값으로 
		}

		// 게시물을 작성하고, 게시물을 생성하면 boards 배열에 넣어줘야함
		this.boards.push(board);
		return board;
	} 

	// ID값으로 특정 게시물 가져오기
	getBoardById(id: string): Board {
		return this.boards.find((board) => board.id === id);
	}
}
