import "./App.css";
import Counter from "./components/counter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "tasks/counter",
    element: <Counter />,
  },
  {
    path: "tasks/useMemo",
    element: <div>задача 2</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
