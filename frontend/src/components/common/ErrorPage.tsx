type ErrorPageProps = {
  message: string;
  httpStatusCode: number;
};

export function ErrorPage({ message, httpStatusCode }: ErrorPageProps) {
  if (httpStatusCode === 404) {
    return <h1>404 status</h1>;
  } else if (httpStatusCode === 500) {
    return <h1>500 status</h1>;
  } else {
    return <h1>Other error</h1>;
  }
}
