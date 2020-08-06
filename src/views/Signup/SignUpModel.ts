export default class SignUpModel {
  public name: string;
  public phoneNumber: string;
  public email: string;
  public password: string;
  public passwordConfirmation: string;

  constructor(
    email?: string,
    password?: string,
    name?: string,
    phoneNumber?: string,
    passwordConfirmation?: string,
  ) {
    this.email = email !== undefined ? email : '';
    this.password = password !== undefined ? password : '';
    this.name = name !== undefined ? name : '';
    this.phoneNumber = phoneNumber !== undefined ? phoneNumber : '';
    this.passwordConfirmation =
      passwordConfirmation !== undefined ? passwordConfirmation : '';
  }
}
