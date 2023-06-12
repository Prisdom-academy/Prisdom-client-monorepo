export interface IGatewayAuthStore {
  remainingExpTime: number;

  verifyingEmail: string;
  setVerifyingEmail(email: string): void;
  removeCurrentEmail(): void;
  logout(): void;
}
