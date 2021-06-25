export interface IApp {
    isAuth: boolean | undefined,
    initialized: boolean | undefined,
    initializeApp: Function
}

export interface IAppNavigation {
    isLoading?: boolean | undefined,
}

export interface IMyAccountSubMenu {
    logOut: Function,
}

export interface IMyAccount {
    myProfile?: any,
    logOut: Function,
}

export interface iForm {
    onSubmit: Function,
    isValid: boolean | undefined,
    errorText: string | undefined
}

export interface ILogin {
    logIn: Function,
    errorText: string | undefined,
    isValidAuth: boolean | undefined
}