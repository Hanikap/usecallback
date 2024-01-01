import React, { useState } from 'react';

const ErrorBoundaryExample = () => {
  const [hasError, setHasError] = useState(false);

  const simulateError = () => {
      setHasError(true);
  };

  return (
    <div>
      <h1>Error Boundary Example</h1>
      <p>This component demonstrates the use of an error boundary.</p>

      {/* Error Boundary */}
      {hasError ? (
        <div>Something went wrong. Please try again later.</div>
      ) : (
        // Component that might throw an error
        <div>
          <p>This is a component without errors.</p>
          <button onClick={simulateError}>Simulate Error</button>
        </div>
      )}
    </div>
  );
};

export default ErrorBoundaryExample;
