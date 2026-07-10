function Loader() {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="spinner"></div>
      <p>Fetching latest weather...</p>
    </div>
  );
}

export default Loader;
