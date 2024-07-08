function FormRow({ label, error, children }) {
  return (
    <div className="items-center gap-6 grid sm:grid-cols-[24rem_1fr_1.2fr] py-4">
      {label && (
        <label htmlFor={children.props.id} className="font-medium">
          {label}
        </label>
      )}
      <div>{children}</div>
      {error && <span className="text-red-700 text-sm">{error}</span>}
    </div>
  );
}

export default FormRow;
