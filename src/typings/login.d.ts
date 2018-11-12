type signUp = {
    name: string;
    email: string;
    password: string;
    firstAccess: boolean;
    activeUser: boolean;
    isAdmin: boolean;
}

type signIn = {
    email: string;
    password: string;
}