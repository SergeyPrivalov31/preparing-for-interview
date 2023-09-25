export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>ЗАДАЧИ</h1>

        <nav>
          <ul>
            <li>
              <a href={`/tasks/counter`}>Your Name</a>
            </li>
            <li>
              <a href={`/tasks/useMemo`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
