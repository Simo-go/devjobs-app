import Card from "../../ui/Card";
import Form from "../../ui/Form";

function AuthForm({ children, onSubmit }) {
  return (
    <Card className="mx-auto max-w-110 p-4 md:max-w-120 md:bg-neutral-0 md:p-10 md:pt-10">
      <Form handleSubmit={onSubmit}>{children}</Form>
    </Card>
  );
}

export default AuthForm;
