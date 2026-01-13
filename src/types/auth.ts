export type UserRole = "ADMIN" | "USER";

export interface User {
  id: string;
  role: UserRole;
}
