import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Details, { detailsLoader } from "./pages/Details/Details.tsx";
import Home from "./pages/Home/Home.tsx";
import Shop, { shopLoader } from "./pages/Shop/Shop.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Home />
      </App>
    ),
  },
  {
    path: "/shop",
    element: (
      <App>
        <Shop />
      </App>
    ),
    loader: shopLoader,
  },
  {
    path: "/details/:id",
    element: (
      <App>
        <Details />
      </App>
    ),
    loader: detailsLoader,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
