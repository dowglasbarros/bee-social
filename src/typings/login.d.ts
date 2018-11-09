type Login = {
    id: number;
    email: string;
    password: string;
    first_access: boolean,
    active: boolean,
    admin: boolean
}

type SignUp = {
    id: number;
    emailSignUp: string;
    passwordSignUp: string;
    confirmPasswordSignUp: string;
    firstAccessSignUp: boolean,
    activeUserSignUp: boolean,
    adminSignUp: boolean
}