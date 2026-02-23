import { useState } from "react";

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const validate = (validator: (val: string) => string | null) => {
    const validationResult = validator(value);
    setError(validationResult);
    return validationResult;
  };

  const reset = () => {
    setValue("");
    setError(null);
  };

  return {
    value,
    setValue,
    error,
    setError,
    validate,
    reset,
  };
}
