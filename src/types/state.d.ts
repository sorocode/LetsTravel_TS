export interface NavState {
  navNum: number;
  setNavNum: (value: number) => void;
}

export interface LoginState {
  isLogin: boolean;
  setLogin: () => void;
  setLogout: () => void;
}
