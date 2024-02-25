class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    this.data = null;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      this.stack = Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
