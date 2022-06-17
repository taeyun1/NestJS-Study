import { IsNotEmpty } from 'class-validator';

// DTO(Data Transfer Object) : 계층간 데이터 교환을 위한 객체.
// DB에서 데이터를 얻어 Sevice나 Controller 등으로 보낼 때 사용하는 객체를 말함.
// DOT는 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체
// Interface나 class를 이용해서 정의 될 수 있음 (하지만 class를 이용하는것을 NestJS에서 추천함)


// DTO 쓰는 이유 : 데이터 유효성 체크하는데 효율적, 더 안정적인 코드로 만들어줌

// DTO 파일 작성
// 클래스는 인터페이스와 다르게 런타임에서 작동하기 떄문에 파이프 같은 기능을 이용할 때 더 유용함
// 그래서 클래스를 사용해서 DTO를 작성함

/// ↓이렇게 DTO를 만들었으면 실제 Controller와 Service에서 Dto를 적용, 먼저 Controller에 적용
export class CreatBoardDto {
	// 인수가 들어왔을때 title 과 description을 보고 자동으로 유효성 체크를 해줌(빈값이면 오류 출력)
	@IsNotEmpty()
	title: string;

	@IsNotEmpty()
	description: string;
}
