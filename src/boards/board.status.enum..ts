// BoardStatus란 : 이 게시물이 공개 게시물인지, 비공개인지 나눠주는것
// 그리고 이 두가지 상태 이외는 나오면 안되기 때문에, 
// 두가지 상태만 나올 수 있게, TS기능은 ecimeration을 이용
// PUBLIC, PRIVATE 외에 다른걸 넣게 되면 에러처리
export enum BoardStatus {
	PUBLIC = 'PUBLIC',
	PRIVATE = 'PRIVATE',
}