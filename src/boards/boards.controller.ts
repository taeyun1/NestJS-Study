import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

		// http://localhost:3000?id=유니크한id
		// @Param로 가져올 수 있음
		// http://localhost:3000?id=유니크한id&title 이렇게 파라미터가 2개면 (id, title)
		// 한꺼번에 가져올때는 findOne(@Param() params: string)
		@Get('/:id')
		getBoardById(@Param('id') id: string): Board {
			return this.boardsService.getBoardById(id);
		}
}
