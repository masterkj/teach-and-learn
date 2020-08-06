export default class SignInModel {
    public email: string;
    public password: string;
    public rememberMe: boolean;

    constructor(email?: string, password?: string, rememberMe?: boolean){
        this.email = email !== undefined ? email : '';
        this.password = password !== undefined ? password : '';
        this.rememberMe = rememberMe !== undefined ? rememberMe : false;
    }

}