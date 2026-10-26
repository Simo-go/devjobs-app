import { Outlet } from "react-router";
import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import Navbar from "./Navbar";

function JobLayout() {
  return (
    <div className="grid min-h-svh grid-rows-[auto_auto_auto_1fr_auto] bg-slate-100 pb-12">
      <Header className="col-start-1 col-end-2 row-start-1 row-end-3 grid w-full grid-rows-subgrid">
        <Container className="py-8">
          <Navbar />
        </Container>
      </Header>
      <Main className="col-start-1 col-end-2 row-[2/span_4] grid grid-rows-subgrid">
        <Container className="row-span-4 grid grid-rows-subgrid">
          <Outlet />
        </Container>
      </Main>
    </div>
  );
}

export default JobLayout;
