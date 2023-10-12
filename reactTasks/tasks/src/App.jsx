import "./App.css";
import Counter from "./components/counter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import CreatePortal from "./components/createPortal";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Root />,
  // },
  {
    path: "tasks/counter",
    element: <Counter />,
  },
  {
    path: "tasks/useMemo",
    element: <div>задача 2</div>,
  },
  {
    path: "tasks/createPortal",
    element: <CreatePortal />,
  },
]);

function App() {
  return (
    <>
      <Root />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
