import { useState } from "react";
import { Error } from "../../components/error/error.message";

export const ErrorPage = () => {
  const [error, setError] = useState(Error);

  const logError = () => {
    console.log(setError());
  };
  return (
    <>
      <div onClick={() => logError()}> {error} </div>
    </>
  );
};
