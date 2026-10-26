import { Outlet } from "react-router";
import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="h-svh min-h-svh bg-slate-100">
      <Header>
        <Container className="pt-8 pb-18">
          <Navbar />
        </Container>
      </Header>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </div>
  );
}

export default AppLayout;
