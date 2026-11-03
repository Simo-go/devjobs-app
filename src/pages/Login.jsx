import LoginForm from "../features/Auth/LoginForm";
import LoginLayout from "../features/Auth/LoginLayout";
import Container from "../ui/Container";
import Header from "../ui/Header";
import Navbar from "../ui/Navbar";

function Login() {
  return (
    <LoginLayout>
      <Header>
        <Container className="py-6">
          <Navbar />
        </Container>
      </Header>
      <Container className="self-center justify-self-center">
        <LoginForm />
      </Container>
    </LoginLayout>
  );
}

export default Login;
