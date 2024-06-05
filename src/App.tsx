import { RouterProvider } from "react-router-dom";
import { router } from "./util/router";
import React, { FC } from "react";

const App: FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
