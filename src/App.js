import { Suspense, useState } from "react";
import "./App.css";
import { Data } from "./Data";
import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";

function App() {
  const [newType, setNewType] = useState("intencional");
  const logError = (error, info) => {
    console.log(error, info);
    // Do something with the error, e.g. log to an external API
  };

  function ErrorFallback({ error, resetErrorBoundary }) {
    const { resetBoundary } = useErrorBoundary();
    const reRender = () => {
      setNewType("");
      resetBoundary();
    };
    if (error.type === 1) {
      return (
        <div>
          <p>Something went wrong!!</p>
          <p style={{ color: "red" }}>{error.message}</p>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      );
    }
    return (
      <div>
        <p>Something went wrong!!</p>
        <p style={{ color: "red" }}>{error.message}</p>
        <button onClick={reRender}>Try again</button>
      </div>
    );
  }
  function fallbackRender({ error, resetErrorBoundary }) {
    return (
      <div>
        <p>Something went wrong!!</p>
        <p style={{ color: "red" }}>{error.message}</p>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

  return (
    <>
      {/* FALLBACK */}
      {/* <ErrorBoundary fallback={<p>Algo falló</p>}>
        <Suspense fallback={<p>loading...</p>}>
          <Data type={"error"} />
        </Suspense>
      </ErrorBoundary> */}

      {/* FALLBACK RENDER */}
      {/* <ErrorBoundary
        fallbackRender={fallbackRender}
        onReset={(details) => {
          console.log(details);
        }}
      >
        <Suspense fallback={<p>loading...</p>}>
          <Data type={"error"} />
          <button>Click</button>
        </Suspense>
      </ErrorBoundary> */}

      {/* FALLBACK COMPONENT */}
      {/* <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
        <Suspense fallback={<p>loading...</p>}>
          <Data type={"error"} />
          <button>Click</button>
        </Suspense>
      </ErrorBoundary> */}

      {/* FALLBACK USING HOOK */}
      {/* <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
        <Suspense fallback={<p>loading...</p>}>
          <Data type={newType} />
          <button>Click</button>
        </Suspense>
      </ErrorBoundary> */}
    </>
  );
}

export default App;
