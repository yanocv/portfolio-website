export const validateName = (value: string): string => {
  const nameRegex = /^(?!\s*$).+/u;
  return nameRegex.test(value) ? "" : "Please enter your name to proceed.";
};

export const validateEmail = (value: string): string => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return emailRegex.test(value) ? "" : "Please enter a valid email address.";
};

export const validateMessage = (value: string): string => {
  return value.trim().length > 10
    ? ""
    : "Please enter a message with at least 10 characters.";
};
