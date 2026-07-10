function ErrorMessage({ message }) {
  return (
    <div className="error-box" role="alert">
      <span className="error-icon">⚠️</span>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
