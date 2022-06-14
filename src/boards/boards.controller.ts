import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
	constructor(private boardsService: BoardsService) {}

	// 모든 게시물을 가져오는 핸들러 생성
	@Get('/')
	getAllBoards(): Board[] {
		return this.boardsService.getAllBoards();
	}

	@Post() 
		createBoard(
			@Body('title') title: string,
			@Body('description') description: string,
			): Board {
				// boardsService의 createBoard를 가져와 title, description 전달
				return this.boardsService.createBoard(title, description);

		}
	


}
