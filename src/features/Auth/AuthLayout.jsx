import Container from "../../ui/Container";
import Header from "../../ui/Header";
import Navbar from "../../ui/Navbar";

function AuthLayout({ children }) {
  return (
    <div className="grid min-h-svh grid-rows-[auto_1fr] bg-neutral-0 md:gap-8 md:bg-slate-100 md:pb-8">
      <Header>
        <Container className="py-6">
          <Navbar />
        </Container>
      </Header>
      <Container className="self-center justify-self-center">
        {children}
      </Container>
    </div>
  );
}

export default AuthLayout;
