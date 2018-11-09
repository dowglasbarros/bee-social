type Login = {
    id: number;
    email: string;
    password: string;
    confirmPassword: string;
    firstAccess: boolean,
    activeUser: boolean,
    admin: boolean
}