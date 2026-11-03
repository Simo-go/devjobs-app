function LoginLayout({ children }) {
  return (
    <div className="grid min-h-svh grid-rows-[auto_1fr] bg-neutral-0 md:gap-8 md:bg-slate-100">
      {children}
    </div>
  );
}

export default LoginLayout;
