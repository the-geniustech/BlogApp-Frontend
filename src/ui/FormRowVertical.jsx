function FormRowVertical({ label, error, children }) {
  return (
    <div className="mb-6">
      {label && (
        <label htmlFor={children.props.id} className="font-medium">
          {label}
        </label>
      )}
      <div>{children}</div>
      {error && (
        <p className="bg-red-100 mt-2 p-2 rounded-md text-red-700 text-xs">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormRowVertical;
