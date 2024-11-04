import { useState, useEffect } from "react";
//API
const getTodos = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  return response.json();
};
//utils
// const formatDate = (dateString) => {
//   const options = { year: "numeric", month: "long", day: "numeric" };
//   return new Date(dateString).toLocaleDateString(undefined, options);
// };
//import
// eslint-disable-next-line react/prop-types
const RenderNestedComponent = ({ title, completed }) => {
  return (
    <div className="nested-component">
      <ul>
        <li>
          <h2>{JSON.parse(JSON.stringify(title)).toUpperCase()}</h2>
          <p>
            <strong>Created at:</strong> {completed ? `scuka` : `krasava`}
          </p>
        </li>
      </ul>
    </div>
  );
};

export const RefactoringTWO = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTodos().then((data) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map(({ title, id, completed }) => (
          <RenderNestedComponent key={id} title={title} completed={completed} />
        ))}
    </div>
  );
};
