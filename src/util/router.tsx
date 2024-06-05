import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/pages/RootLayout";
import MainPage from "../components/pages/MainPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);
