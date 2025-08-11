import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import App from "./App";

import { guestRoutes } from "./routes/GuestRoutes.jsx";
import { mainRoutes } from "./routes/MainRoutes.jsx";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  ...guestRoutes,
  ...mainRoutes,
 
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
