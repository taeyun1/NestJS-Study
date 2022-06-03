import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
	private boards = ['데이터A', '데이터B'];

	// 모든 게시물 데이터 가져오기
	// getAllBoards를 호출하면 boards배열에 있는 모든 값을 받을 수 있게
	getAllBoards() {
		return this.boards;

	}
}
