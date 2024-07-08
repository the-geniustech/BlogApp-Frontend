const Form = ({ type = "regular", children }) => {
  const formClass =
    type === "modal"
      ? "w-full max-w-4xl"
      : "p-6 sm:p-10 bg-gray-50 border border-gray-200 rounded-md";

  return (
    <form className={`overflow-hidden text-sm ${formClass}`}>{children}</form>
  );
};

export default Form;
