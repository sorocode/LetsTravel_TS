import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FC } from "react";
import { Separator } from "@/components/ui/separator";

interface LoginProps {}

const LoginPage: FC<LoginProps> = () => {
  return (
    <div className="flex flex-col gap-12">
      <form className="flex flex-col justify-center gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className="px-2 py-1 w-full h-12 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            name="password"
            id="password"
            className="px-2 py-1 w-full h-12 rounded-md"
            placeholder="your password"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="autoLogin" />
          <label htmlFor="autoLogin">자동 로그인</label>
        </div>
        <Button>로그인</Button>
        <p className="flex justify-center items-center gap-2">
          <Button type="button" variant="link">
            아이디찾기
          </Button>
          <Separator orientation="vertical" className="h-5 bg-gray-400" />
          <Button type="button" variant="link">
            비밀번호 찾기
          </Button>
        </p>
      </form>
      <Button asChild variant="outline">
        <Link to="/signup">회원가입</Link>
      </Button>
    </div>
  );
};

export default LoginPage;
