export const Root = () => {
  const allTabs = [
    {
      id: "notes",
      name: "Справочник",
      href: `/tasks/notes`,
    },
    {
      id: "counter",
      name: "Счётчик",
      href: `/tasks/counter`,
    },
    {
      id: "ex",
      name: "PAGE title",
      href: `/tasks/ex`,
    },
    {
      id: "portal",
      name: "portal",
      href: `/tasks/createPortal`,
    },
    {
      id: "inputFocus",
      name: "inputFocus",
      href: `/tasks/inputFocus`,
    },
    {
      id: "fetchTodos",
      name: "fetchTodos",
      href: `/tasks/fetchTodos`,
    },
    {
      id: "IntervalEx",
      name: "IntervalEx",
      href: `/tasks/IntervalEx`,
    },
    {
      id: "FlagEx",
      name: "FlagEx",
      href: `/tasks/FlagEx`,
    },
    {
      id: "WhoTheFirst",
      name: "WhoTheFirst",
      href: `/tasks/WhoTheFirst`,
    },
    {
      id: "Refactoring",
      name: "Refactoring",
      href: `/tasks/Refactoring`,
    },
    {
      id: "RefactoringTWO",
      name: "RefactoringTWO",
      href: `/tasks/RefactoringTWO`,
    },
  ];

  return (
    <div style={{ margin: "0.1em" }}>
      {allTabs.map(({ id, name, href }) => {
        return (
          <button
            style={{
              margin: "5px",
              border: "1px solid blue",
            }}
            key={id}
          >
            <a href={href}>{name}</a>
          </button>
        );
      })}
    </div>
  );
};
