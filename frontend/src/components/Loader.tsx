function Loader() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p>Detecting objects...</p>
      <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full w-8 h-8"></div>
    </div>
  );
}

export default Loader;
