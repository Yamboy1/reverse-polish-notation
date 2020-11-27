export class StackTooSmallError extends Error {
  constructor(message: string) {
    super();

    this.name = "StackTooSmallError";
    this.message = message;
  }
}

export class StackTooBigError extends Error {
  constructor(message: string) {
    super();

    this.name = "StackTooBigError";
    this.message = message;
  }
}

export class InvalidToken extends Error {
  constructor(message: string) {
    super();

    this.name = "InvalidToken";
    this.message = message;
  }
}
