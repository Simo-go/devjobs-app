function Main({ children }) {
  return (
    <main className="col-start-1 col-end-2 row-[2/span_3] grid grid-rows-subgrid">
      {children}
    </main>
  );
}

export default Main;
