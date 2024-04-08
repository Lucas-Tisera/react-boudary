import { useErrorBoundary } from "react-error-boundary";
import wrapPromise from "./WrapPromise";

const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["JUAN", "PABLO"]), 2000);
  });
};

const users = wrapPromise(getUsers());

export const Data = ({ type }) => {
  const { showBoundary } = useErrorBoundary();
  console.log("EJECUTANDO DATA");

  if (type === "intencional") {
    showBoundary({ message: "Error intencional", type: 2 });
  }

  try {
    const data = type === "error" ? users.error() : users.read();
    return (
      <>
        <h1>Users</h1>
        <ul>
          {data.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </>
    );
  } catch (error) {
    throw error;
  }
};
