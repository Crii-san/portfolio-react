export interface UserType {
  email: string;
  name: string;
  picture: string;
  sub: string; 
}

export interface AuthStateType {
  user: UserType | null;
  isAuthenticated: boolean;
  loading: boolean;
}