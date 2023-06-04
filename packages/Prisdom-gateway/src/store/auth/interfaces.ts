export interface IGatewayAuthStore {
  verifyingEmail: string;
  setVerifyingEmail(email: string): void;
  removeCurrentEmail(): void;
}
