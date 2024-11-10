import { useState } from "react";

type Errors = { [key: string]: string };

const useValidation = (): {
  errors: Errors;
  validateField: (
    name: string,
    value: string,
    validator: (val: string) => string
  ) => string;
} => {
  const [errors, setErrors] = useState<Errors>({});

  const validateField = (
    name: string,
    value: string,
    validator: (val: string) => string
  ): string => {
    const error = validator(value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    return error;
  };

  return { errors, validateField };
};

export default useValidation;
