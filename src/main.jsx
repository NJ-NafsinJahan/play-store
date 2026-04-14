import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import Apps from "./pages/apps/Apps";
import InstallApps from "./pages/installApps/InstallApps";
import NotFoundPage from "./pages/NotFountPage/NotFountPage";
import HomePage from "./pages/homePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        // path: "/", and index: true, is same thing, they both mean homepage.
        index: true,
        element: <HomePage />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installedApps",
        element: <InstallApps />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
