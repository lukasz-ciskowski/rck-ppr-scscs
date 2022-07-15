export interface GameState {
  user: LoggedUser | null;
}

interface LoggedUser {
  username: string;
}
