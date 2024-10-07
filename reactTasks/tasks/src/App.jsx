import Counter from "./components/counter";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import CreatePortal from "./components/createPortal";
import { Example } from "./components/example";
import { PhoneBook } from "./components/notes";
import { ActionButtonRef } from "./components/refFix";
import { FetchTodosComponent } from "./components/fetchTodos";
import { IntervalEx } from "./components/intervalEx";
import { FlagEx } from "./components/flagEx";
import { WhoTheFirst } from "./components/whoTheFirstRender";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Выбери задание</h1>

        <h5>Открой инструменты разработчика</h5>
      </div>
    ),
  },
  {
    path: "tasks/notes",
    element: <PhoneBook />,
  },
  {
    path: "tasks/counter",
    element: <Counter />,
  },
  {
    path: "tasks/ex",
    element: <Example />,
  },
  {
    path: "tasks/createPortal",
    element: <CreatePortal />,
  },
  {
    path: "tasks/inputFocus",
    element: <ActionButtonRef />,
  },
  {
    path: "tasks/fetchTodos",
    element: <FetchTodosComponent />,
  },
  {
    path: "tasks/IntervalEx",
    element: <IntervalEx />,
  },
  {
    path: "tasks/FlagEx",
    element: <FlagEx />,
  },
  {
    path: "tasks/WhoTheFirst",
    element: <WhoTheFirst />,
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
