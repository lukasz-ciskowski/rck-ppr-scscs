export interface LoginUserAction {
  type: "LOGIN";
  payload: {
    username: string;
  };
}

export type GameActions = LoginUserAction;
