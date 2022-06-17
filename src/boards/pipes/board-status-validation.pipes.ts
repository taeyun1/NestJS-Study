import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.status.enum.';

// 커스텀 파이프로 실제 기능 구현하기
// 구현 할 기능 : 상태(Status)는 PUBLIC과 PRIVATE만 올 수 있기 때문에, 이외 값이 오면 에러 보내기.

// readonly class property : readonly는 속성을 읽기 전용으로 만드는데 사용됨. 읽기 전용 멤버는 클래스 외부에서 액세스 할 수 있지만, 해당 값은 변경할 수 없음.
export class BoardStatusValidationPipe implements PipeTransform {

	readonly StatusOptions = [
		BoardStatus.PRIVATE,
		BoardStatus.PUBLIC,
	]

	transform(value: any) {
		value = value.toUpperCase();

		// StatusOptions안에 PRIVATE이나 PUBLIC이 들어있으면 반환 해주고, 아니면 에러 출력
		if(!this.isStatusValid(value)) {
			throw new BadRequestException(`${value} isn't in the status options`);
		}

		return value;

	}

	// value에 PRIVATE, PUBLIC 외의 다른값을 넣으면 -1을 반환함 (false)
	private isStatusValid(status: any) {
		const index = this.StatusOptions.indexOf(status);
		return index !== -1;
	}
}