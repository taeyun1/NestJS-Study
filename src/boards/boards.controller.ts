import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
	constructor(private boardsService: BoardsService) {

	}

	// 모든 게시물을 가져오는 핸들러 생성
	@Get()
	getAllBoards() {
		return this.boardsService.getAllBoards();
	}


}
