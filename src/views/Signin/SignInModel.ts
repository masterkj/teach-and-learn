export default class SignInModel {
    public phoneNumber: string;
    public password: string;
    public rememberMe: boolean;

    constructor(phoneNumber?: string, password?: string, rememberMe?: boolean){
        this.phoneNumber = phoneNumber !== undefined ? phoneNumber : '';
        this.password = password !== undefined ? password : '';
        this.rememberMe = rememberMe !== undefined ? rememberMe : false;
    }

}