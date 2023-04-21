/**
 * Template example should be:
 * "\<\<Tony Tran>>" just join your course '\<\<JS Master>>'
 * << >> represent for keyword
 */
export type NotificationTemplate = string;

export enum NotificationCategoryEnum {
  NEW,
  EARLIER,
}

export interface INotification {
  id: string;
  src: string;
  avatarName: string;
  notificationTitle: NotificationTemplate;
  onApprove?: () => void;
  onDecline?: () => void;
  isShowActionButton?: boolean;
  notificationState: "read" | "unread";
  createdAt: Date;
  category: NotificationCategoryEnum;
}
