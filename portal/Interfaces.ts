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