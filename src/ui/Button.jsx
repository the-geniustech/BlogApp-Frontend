import classNames from "classnames";

const Button = ({
  variation = "primary",
  size = "medium",
  children,
  ...props
}) => {
  const sizeClasses = {
    small: "text-xs py-1 px-2 uppercase font-semibold text-center",
    medium: "text-sm py-3 px-4 font-medium",
    large: "text-base py-3 px-6 font-medium",
  };

  const variationClasses = {
    primary: "text-brand-50 bg-brand-600 hover:bg-brand-700",
    secondary:
      "text-grey-600 bg-grey-0 border border-grey-200 hover:bg-grey-50",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
  };

  return (
    <button
      className={classNames(
        "border-none rounded shadow-sm",
        sizeClasses[size],
        variationClasses[variation]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
