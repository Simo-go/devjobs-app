import Form from "../../ui/Form";

function AuthFormHeader({ title, caption, Icon }) {
  return (
    <Form.Header className="mb-8 text-center">
      {Icon && (
        <div className="mx-auto mb-3 w-fit rounded-lg bg-slate-100 p-4 md:shadow-md">
          {Icon}
        </div>
      )}
      <h1 className="mb-1 text-preset-2 text-slate-900">{title}</h1>
      <p className="text-preset-5 font-normal text-slate-900/50">{caption}</p>
    </Form.Header>
  );
}

export default AuthFormHeader;
