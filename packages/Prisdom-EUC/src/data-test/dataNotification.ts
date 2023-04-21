import {
  INotification,
  NotificationCategoryEnum
} from 'models/notification';

export const dataNotifications: INotification[] = [
  {
    id: '1',
    src: 'https://img.freepik.com/free-vector/abstract-colorful-shapes-background_23-2148769631.jpg',
    avatarName: 'Absic',
    notificationTitle:
      'Your instructor just <<commented>> on your question',
    isShowActionButton: false,
    notificationState: 'unread',
    category: NotificationCategoryEnum.NEW,
    createdAt: new Date()
  },
  {
    id: '2',
    src: 'https://img.freepik.com/premium-photo/organic-abstract-gradient-wallpaper-background-header-illustration_692702-9499.jpg',
    avatarName: 'Alonso',
    notificationTitle: '<<Tony Tran>> just sent you a friend request',
    isShowActionButton: true,
    onApprove: () => {},
    onDecline: () => {},
    notificationState: 'read',
    category: NotificationCategoryEnum.NEW,
    createdAt: new Date()
  },
  {
    id: '3',
    src: 'https://img.freepik.com/free-vector/abstract-colorful-shapes-background_23-2148769631.jpg',
    avatarName: 'Garen',
    notificationTitle:
      'Your instructor just <<commented>> on your question',
    isShowActionButton: false,
    notificationState: 'read',
    category: NotificationCategoryEnum.EARLIER,
    createdAt: new Date()
  },
  {
    id: '4',
    src: 'https://img.freepik.com/premium-photo/organic-abstract-gradient-wallpaper-background-header-illustration_692702-9499.jpg',
    avatarName: 'Catalina',
    notificationTitle: '<<Tony Tran>> just sent you a friend request',
    isShowActionButton: true,
    onApprove: () => {},
    onDecline: () => {},
    notificationState: 'unread',
    category: NotificationCategoryEnum.EARLIER,
    createdAt: new Date()
  },
  {
    id: '1',
    src: 'https://img.freepik.com/free-vector/abstract-colorful-shapes-background_23-2148769631.jpg',
    avatarName: 'Absic',
    notificationTitle:
      'Your instructor just <<commented>> on your question',
    isShowActionButton: false,
    notificationState: 'unread',
    category: NotificationCategoryEnum.EARLIER,
    createdAt: new Date()
  },
  {
    id: '2',
    src: 'https://img.freepik.com/premium-photo/organic-abstract-gradient-wallpaper-background-header-illustration_692702-9499.jpg',
    avatarName: 'Alonso',
    notificationTitle: '<<Tony Tran>> just sent you a friend request',
    isShowActionButton: true,
    onApprove: () => {},
    onDecline: () => {},
    notificationState: 'read',
    category: NotificationCategoryEnum.EARLIER,
    createdAt: new Date()
  }
];

export const dataNotification: INotification[] = [];
