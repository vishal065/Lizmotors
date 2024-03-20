import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeroOne } from "./Components/Hero.jsx";
import Planning from "./Components/Planning.jsx";
import Desiging from "./Components/Desiging.jsx";
import Manufacturing from "./Components/Manufacturing.jsx";
import BookNow from "./Components/BookNow.jsx";
import Research from "./Components/Research/Research.jsx";
import External from "./Components/Research/External.jsx";
import Internal from "./Components/Research/Internal.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HeroOne />,
      },
      {
        path: "Research/",
        element: <Research />,
        children: [
          {
            path: "External",
            element: <External />,
          },
          {
            path: "Internal",
            element: <Internal />,
          },
        ],
      },
      {
        path: "Planning",
        element: <Planning />,
      },
      {
        path: "Desiging",
        element: <Desiging />,
      },
      {
        path: "Manufacturing",
        element: <Manufacturing />,
      },
      {
        path: "book-now",
        element: <BookNow />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
