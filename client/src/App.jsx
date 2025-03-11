function App() {
  return (
    <>
      <div className="max-w-[500px] mx-auto">
        <div className="flex items-center justify-center h-5 w-full border-b border-gray-300">
          <div className="h-5 w-5 bg-bilink-primary flex-1" />
          <div className="h-5 w-5 bg-bilink-secondary flex-1" />
          <div className="h-5 w-5 bg-bilink-background flex-1" />
          <div className="h-5 w-5 bg-bilink-accent flex-1" />
          <div className="h-5 w-5 bg-bilink-dark flex-1" />
        </div>
        <center className="text-3xl text-bilink-dark font-semibold mt-3">Bilink.</center>
      </div>
    </>
  );
}

export default App;
