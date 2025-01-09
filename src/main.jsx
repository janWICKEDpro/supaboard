import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import GetStared from "./pages/GetStarted.jsx";
import Auth from "./pages/auth.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import CreateBoard from "./pages/createBoard.jsx";
import WhiteBoard from "./pages/whiteBoard.jsx";
import { GlobalProvider } from "./context/global.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GetStared />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/create-board",
    element: <CreateBoard />,
  },
  {
    path: "/board:boardId",
    element: <WhiteBoard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </StrictMode>
);
