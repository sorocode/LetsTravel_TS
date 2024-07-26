import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface IndexPageProps {}

const IndexPage: FC<IndexPageProps> = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Button asChild>
          <Link to="login">로그인</Link>
        </Button>
        <Button asChild>
          <Link to="profile">프로필</Link>
        </Button>
        <Button asChild>
          <Link to="schedule">스케쥴</Link>
        </Button>
        <Button asChild>
          <Link to="search">검색</Link>
        </Button>
        <Button asChild>
          <Link to="favorites">찜</Link>
        </Button>
        <Button asChild>
          <Link to="plan">계획</Link>
        </Button>
        <Button asChild>
          <Link to="spot">관광지</Link>
        </Button>
      </div>
    </>
  );
};

export default IndexPage;
