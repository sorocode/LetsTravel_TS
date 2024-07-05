import { RouterProvider } from "react-router-dom";
import { router } from "./util/router";
import React, { FC } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
