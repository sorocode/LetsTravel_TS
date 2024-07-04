import React from "react";
import RootLayout from "../components/pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import SearchPage from "@/components/pages/Search/SearchPage";
import SchedulePage from "@/components/pages/Schedule/SchedulePage";
import FavoritePage from "@/components/pages/Favorite/FavoritePage";
import MapPage from "@/components/pages/Map/MapPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "schedule",
        element: <SchedulePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "favorites",
        element: <FavoritePage />,
      },
      {
        path: "map",
        element: <MapPage />,
      },
    ],
  },
]);
