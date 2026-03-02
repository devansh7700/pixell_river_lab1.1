import { useState } from "react";

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(e.target.value);
    setError(""); // clear error when user types
  };

  const validate = (validator: (val: string) => string | null) => {
    const validationResult = validator(value);
     setError(validationResult ?? "");
    return validationResult;
  };
  const reset = () => {
    setValue("");
    setError("");
  };

  return {
    value,
    error,
    onChange,
    validate,
    reset,
  };
}
