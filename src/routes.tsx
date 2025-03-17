import { createBrowserRouter } from "react-router";

import Layout from "./layout.tsx";
import Page1 from "./page1.tsx";
import Page2 from "./page2.tsx";

const router = createBrowserRouter([
  {
    id: "layout",
    path: "/",
    Component: Layout,
    children: [
      {
        id: "page1",
        index: true,
        path: "page1",
        Component: Page1,
      },
      {
        id: "about",
        path: "page2",
        Component: Page2,
      },
    ],
  },
]);

export default router
