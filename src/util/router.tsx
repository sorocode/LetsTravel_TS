import React from "react";
import RootLayout from "../components/pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import SearchPage from "@/components/pages/Search/SearchPage";
import SchedulePage from "@/components/pages/Schedule/SchedulePage";
import FavoritePage from "@/components/pages/Favorite/FavoritePage";
import MapPage from "@/components/pages/Map/MapPage";
import LoginPage from "@/components/pages/Login/LoginPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "schedule",
        children: [
          {
            index: true,
            element: <SchedulePage />,
          },
        ],
      },
      {
        path: "search",
        children: [
          {
            // TODO:나라 검색 컴포넌트로 변경하기
            index: true,
            element: <SearchPage />,
          },
        ],
      },
      {
        path: "favorites",
        element: <FavoritePage />,
      },
      {
        path: "map",
        element: <MapPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
