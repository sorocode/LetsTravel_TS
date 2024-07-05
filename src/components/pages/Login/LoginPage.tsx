import { FC } from "react";

interface LoginProps {}

const LoginPage: FC<LoginProps> = () => {
  return (
    <form className="flex flex-col justify-center items-center">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="example@gmail.com"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="your password"
      />
    </form>
  );
};

export default LoginPage;
