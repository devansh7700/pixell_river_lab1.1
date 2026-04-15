import { useState } from "react";

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValue(e.target.value);
    setError(null);
  };

  const reset = () => {
    setValue("");
    setError(null);
  };

  const validate = (
    validator: () => string | null
  ) => {
    const validationError = validator();
    setError(validationError);
  };

  return {
    value,
    setValue,
    onChange,
    reset,
    error,
    setError,
    validate,
  };
}