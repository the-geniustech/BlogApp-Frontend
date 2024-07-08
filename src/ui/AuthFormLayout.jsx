const LoginLayout = ({ children }) => {
  return (
    <main className="place-content-center gap-8 grid bg-gray-50 min-h-screen">
      <div className="w-full max-w-xl">{children}</div>
    </main>
  );
};

export default LoginLayout;
