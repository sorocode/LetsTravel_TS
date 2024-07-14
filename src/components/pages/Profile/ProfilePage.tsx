import { Button } from "@/components/ui/button";
import { useLoginStore } from "@/store/store";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = () => {
  const { setLogout } = useLoginStore();
  const navigate = useNavigate();
  const onLogoutHandler = (): void => {
    setLogout();
    navigate("/schedule");
  };
  return (
    <>
      <p>프로필페이지입니다</p>
      <Button onClick={onLogoutHandler}>로그아웃</Button>
    </>
  );
};

export default ProfilePage;
