import RootLayout from "@/pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import SearchPage from "@/pages/Search/SearchPage";
import SchedulePage from "@/pages/Schedule/SchedulePage";
import FavoritePage from "@/pages/Favorite/FavoritePage";
import MapPage from "@/pages/Map/MapPage";
import LoginPage from "@/pages/Login/LoginPage";
import ProfilePage from "@/pages/Profile/ProfilePage";
import PlanPage from "@/pages/Plan/PlanPage";
import IndexPage from "@/pages/Index/IndexPage";
import SearchLayout from "@/pages/Search/SearchLayout";
import IndexLayout from "@/pages/Index/IndexLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <IndexLayout />,
        children: [
          {
            index: true,
            element: <IndexPage />,
          },
        ],
      },
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
        element: <SearchLayout />,
        children: [
          {
            index: true,
            element: <SearchPage />,
          },
          {
            path: "map",
            element: <MapPage />,
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
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "plan",
        children: [
          {
            path: ":cityName",
            element: <PlanPage />,
          },
        ],
      },
    ],
  },
]);
