function Input({
  type,
  id,
  placeholder,
  disabled,
  register,
  accept,
  testValue,
}) {
  return (
    <input
      type={type}
      {...accept}
      placeholder={placeholder}
      id={id}
      defaultValue={testValue}
      disabled={disabled}
      className="border-stroke focus:border-primary bg-transparent focus-visible:shadow-none px-5 py-3 border rounded-md w-full text-base text-body-color outline-none"
      {...register}
    />
  );
}

export default Input;
