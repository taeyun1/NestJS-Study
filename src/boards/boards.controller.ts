import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
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
	// ValidationPipe : 유효성 체크를 하고 싶을 때 사용
	@UsePipes(ValidationPipe) // DTO에 넣어준것들이 자동으로 title과 description이 있는지 없는지 유효성 체크를 해줌
		createBoard(
			@Body() createBoardDto: CreatBoardDto
			): Board {
				// boardsService의 createBoard를 가져와 title, description 전달
				return this.boardsService.createBoard(createBoardDto);
		}

		// ID값으로 특정 게시물 가져오기 기능
		// http://localhost:3000?id=유니크한id
		// @Param로 가져올 수 있음
		// http://localhost:3000?id=유니크한id&title 이렇게 파라미터가 2개면 (id, title)
		// 한꺼번에 가져올때는 findOne(@Param() params: string)
		@Get('/:id')
		getBoardById(@Param('id') id: string): Board {
			return this.boardsService.getBoardById(id);
		}

		// ID값으로 특정 게시물 삭제하기 기능
		@Delete('/:id')
		deleteBoard(@Param('id') id: string): void {
			this.boardsService.deleteBoard(id);
		}

		// 특정 게시물 상태 업데이트 기능
		@Patch('/:id/status')
		updateBoardStatus(
			@Param('id') id: string,
			@Body('status') status: BoardStatus,
		) {
			return this.boardsService.updateBoardStatus(id, status);
		}
}