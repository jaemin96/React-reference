import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <p>
        {error.status} {error.statusText}
      </p>
    );
  } else if (error instanceof Error) {
    return <p>{error.message}</p>;
  } else if (typeof error === 'string') {
    return <p>{error}</p>;
  } else {
    console.error(error);
    return <p>Unknown error</p>;
  }
};

export default ErrorPage;
