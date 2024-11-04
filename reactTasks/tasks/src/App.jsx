import Counter from "./components/counter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import CreatePortal from "./components/createPortal";
import { Example } from "./components/example";
import { PhoneBook } from "./components/notes";
import { ActionButtonRef } from "./components/refFix";
import { FetchTodosComponent } from "./components/fetchTodos";
import { IntervalEx } from "./components/intervalEx";
import { FlagEx } from "./components/flagEx";
import { WhoTheFirst } from "./components/whoTheFirstRender";
import { Refactoring } from "./components/refactoring";
import { RefactoringTWO } from "./components/refactoringTWO";
import { AppleSamsungTypesProps } from "./components/appleSamsungTypesProps";
import { LoopUseFffect } from "./components/loopUseFffect";

const className = {
  display: "flex",
  margin: "20px",
  alignItems: "center",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div style={className}>
        <h2>
          Выбери задание <br />
          <p>открой инструменты разработчика</p>
        </h2>
      </div>
    ),
  },
  {
    path: "tasks/notes",
    element: <PhoneBook className={className} />,
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
  {
    path: "tasks/Refactoring",
    element: <Refactoring />,
  },
  {
    path: "tasks/RefactoringTWO",
    element: <RefactoringTWO />,
  },
  {
    path: "tasks/AppleSamsungTypesProps",
    element: <AppleSamsungTypesProps />,
  },
  {
    path: "tasks/LoopUseFffect",
    element: <LoopUseFffect />,
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
