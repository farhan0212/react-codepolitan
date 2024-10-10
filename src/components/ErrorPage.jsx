import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Error Page</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
