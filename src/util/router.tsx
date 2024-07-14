import RootLayout from "../components/pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import SearchPage from "@/components/pages/Search/SearchPage";
import SchedulePage from "@/components/pages/Schedule/SchedulePage";
import FavoritePage from "@/components/pages/Favorite/FavoritePage";
import MapPage from "@/components/pages/Map/MapPage";
import LoginPage from "@/components/pages/Login/LoginPage";
import ProfilePage from "@/components/pages/Profile/ProfilePage";
import PlanPage from "@/components/pages/Plan/PlanPage";
import IndexPage from "@/components/pages/IndexPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
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
        children: [
          {
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
