import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FC } from "react";
import { Separator } from "@/components/ui/separator";

import LoginForm from "./LoginForm";

interface LoginProps {}

const LoginPage: FC<LoginProps> = () => {
  return (
    <div className="flex flex-col gap-6 mt-10">
        <p className="font-medium text-lg">로그인</p>
      <LoginForm />
      <div className="flex justify-center items-center gap-2">
        <Button type="button" variant="link">
          아이디찾기
        </Button>
        <Separator orientation="vertical" className="h-5 bg-gray-400" />
        <Button type="button" variant="link">
          비밀번호 찾기
        </Button>
      </div>
      <Button asChild variant="outline">
        <Link to="/signup">회원가입</Link>
      </Button>
    </div>
  );
};

export default LoginPage;
