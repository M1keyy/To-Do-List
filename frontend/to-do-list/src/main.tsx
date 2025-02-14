import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="Home" replace />,
      },
      {
        path: "Home",
        element: <HomePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
);
