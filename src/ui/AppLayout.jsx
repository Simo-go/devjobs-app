import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Main from "./Main";
import Header from "./Header";
import Search from "../features/filters/Search";
import Container from "./Container";

function AppLayout() {
  return (
    <div className="bg-slate-100">
      <Header>
        <Container>
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
