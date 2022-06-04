class InvalidParamError extends Error {
  constructor(paramName: string) {
    super(`innvalid param: ${paramName}`);

    this.name = 'InvalidParamError';
  }
}

export default InvalidParamError;
