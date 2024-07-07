export interface User {
  user_seq: number;
  email: string;
  password: string;
  fname: string;
  lname: string;
  nickname: string;
  birthdate: string; // Date 타입도 가능하지만, 일반적으로 문자열로 처리함
  sex: number; // 0: Unknown, 1: Male, 2: Female
  regtime?: string; // Optional 필드
  logintime?: string; // Optional 필드
  status: number; // 1: 정상, 2: 휴면
}
