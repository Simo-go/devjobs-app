export const LIMIT = 9;

export const validations = {
  firstName: {
    required: {
      value: true,
      message: "Provide a first name",
    },
    minLength: {
      value: 3,
      message: "must contain at least three letters",
    },
    pattern: {
      value: /^[a-zA-Z\s]+$/g,
      message: "Can only contain letters and whitespace",
    },
  },
  lastName: {
    required: {
      value: true,
      message: "Provide a last name",
    },
    minLength: {
      value: 3,
      message: "Must contain at least three letters",
    },
    pattern: {
      value: /^[a-zA-Z\s]+$/g,
      message: "Can only contain letters and whitespace",
    },
  },
  email: {
    required: { value: true, message: "Provide an email" },
    pattern: {
      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/g,
      message: "Incorrect email format",
    },
  },
  password: {
    required: {
      value: true,
      message: "Provide a password",
    },
    minLength: {
      value: 8,
      message: "Passowrd must be at least 8 characters",
    },
    pattern: {
      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/gm,
      message: "Incorrect password format",
    },
  },
};
