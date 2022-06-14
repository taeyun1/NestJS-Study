import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreatBoardDto } from './dto/cerate-board.dto';

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
			@Body('title') createBoardDto: CreatBoardDto
			): Board {
				// boardsService의 createBoard를 가져와 title, description 전달
				return this.boardsService.createBoard(createBoardDto);
		}
}
