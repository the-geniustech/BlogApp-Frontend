function ImgInput({ id, disabled, register }) {
  return (
    <div className="relative w-full">
      <input
        type="file"
        accept="image/*"
        id={id}
        {...register}
        disabled={disabled}
        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
      />
      <label
        htmlFor={id}
        className="flex items-center border-stroke focus:border-primary bg-transparent focus-visible:shadow-none px-5 py-3 border rounded-md w-full text-base text-gray-400 cursor-pointer outline-none"
      >
        Photo
      </label>
    </div>
  );
}

export default ImgInput;
