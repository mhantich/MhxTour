import React from 'react';
import './ErrorNot.css'; // Import the CSS file

function ErrorNot({erros,icons}) {
  return (
    <div className="error-not"> {/* Use the className to apply the styles */}
        {icons}
      <p>{erros}</p> {/* Add your error message text here */}
    </div>
  );
}

export default ErrorNot;
