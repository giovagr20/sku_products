import { useState } from "react";
import { Error } from "../../components/error/error.message";

export const ErrorPage = () => {
  const [error, setError] = useState(Error);
  return (
    <>
      <div> {error} </div>
    </>
  );
};
