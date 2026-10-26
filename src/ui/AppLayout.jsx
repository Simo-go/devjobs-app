import { Outlet } from "react-router";
import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="grid min-h-svh grid-rows-[auto_auto_auto_1fr_auto] bg-slate-100 pb-12">
      <Header>
        <Container className="py-8">
          <Navbar />
        </Container>
      </Header>
      <Main>
        <Container className="row-span-4 grid grid-rows-subgrid">
          <Outlet />
        </Container>
      </Main>
    </div>
  );
}

export default AppLayout;
