import React, { FC, useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import { Schedule, Search } from "@mui/icons-material";
import { useNavStore } from "@/store/store";
const Navbar: FC = () => {
  const navNum = useNavStore((state) => state.navNum);
  const navigatePage = useNavStore((state) => state.navigatePage);
  // const [value, setValue] = useState<number>(0);

  const navigate = useNavigate();
  //FIXME: url로 라우터 접근했을때 네비게이션 선택 상태가 안바뀌는 오류 해결하기
  const handleChangePage = (to: number): void => {
    switch (to) {
      case 0:
        navigate("/schedule");
        break;
      case 1:
        navigate("/favorites");
        break;
      case 2:
        navigate("/map");
        break;

      default:
        navigate("/search");
        break;
    }
  };
  return (
    <Box>
      <BottomNavigation
        showLabels
        value={navNum}
        onChange={(event, newValue) => {
          navigatePage(newValue);
          handleChangePage(newValue);
        }}
        className="flex justify-center"
      >
        <BottomNavigationAction label="스케쥴" icon={<Schedule />} />
        <BottomNavigationAction label="찜" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="지도" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="검색" icon={<Search />} />
      </BottomNavigation>
    </Box>
  );
};

export default Navbar;
