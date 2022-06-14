import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

		// ID값으로 특정 게시물 가져오기
		// http://localhost:3000?id=유니크한id
		// @Param로 가져올 수 있음
		// http://localhost:3000?id=유니크한id&title 이렇게 파라미터가 2개면 (id, title)
		// 한꺼번에 가져올때는 findOne(@Param() params: string)
		@Get('/:id')
		getBoardById(@Param('id') id: string): Board {
			return this.boardsService.getBoardById(id);
		}

		// ID값으로 특정 게시물 삭제하기
		@Delete('/:id')
		deleteBoard(@Param('id') id: string): void {
			this.boardsService.deleteBoard(id);
		}
}
