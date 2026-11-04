import { Outlet } from "react-router";
import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="grid min-h-svh grid-rows-[auto_1fr] bg-slate-100">
      <Header>
        <Container className="py-8">
          <Navbar />
        </Container>
      </Header>
      <Main className="grid place-items-center">
        <Container>
          <Outlet />
        </Container>
      </Main>
    </div>
  );
}

export default AppLayout;
