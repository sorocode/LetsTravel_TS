import React, { FC, useEffect } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate, useLocation } from "react-router-dom";
import { Schedule, Search } from "@mui/icons-material";
import { useNavStore } from "@/store/store";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { navNum, setNavNum } = useNavStore();

  //FIXME: 여기에 없는 라우터에 접속 가능하게 만들기
  const pathToIndexMap: { [key: string]: number } = {
    "/schedule": 0,
    "/favorites": 1,
    "/map": 2,
    "/search": 3,
  };

  const indexToPathMap: { [key: number]: string } = {
    0: "/schedule",
    1: "/favorites",
    2: "/map",
    3: "/search",
  };

  // Update Zustand state when the URL changes
  useEffect(() => {
    const currentPath = location.pathname;
    const selectedNavIndex = pathToIndexMap[currentPath] ?? 0;
    if (navNum !== selectedNavIndex) {
      setNavNum(selectedNavIndex);
    }
  }, [location.pathname, navNum, setNavNum]);

  // Update the URL when the selected navigation index changes
  useEffect(() => {
    const currentPath = location.pathname;
    const newPath = indexToPathMap[navNum];
    if (currentPath !== newPath) {
      navigate(newPath, { replace: true });
    }
  }, [navNum, navigate]);

  const handleChangePage = (
    event: React.SyntheticEvent,
    newValue: number
  ): void => {
    setNavNum(newValue);
  };

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={navNum}
        onChange={handleChangePage}
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
