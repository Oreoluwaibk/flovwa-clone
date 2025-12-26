export interface INotification {
  id?: string;
  title: string;
  message: string;
  type: number;
  typeName?: string;
  priority?: number;
  priorityName?: string;
  data?: {
    [key: string]: any;
  };
  actionUrl?: string;
  iconUrl?: string;
  requiresAction?: boolean;
  isRead?: boolean;
  isDelivered?: boolean;
  expiresAt?: string;
  createdAt?: string;
  readAt?: string;
  deliveredAt?: string;
  timestamp?: string;

}

export interface Reward {
  id: string;
  title: string;
  description: string;
  type: "payment" | "card" | "course";
  value: number;   // dollar value (0 for free items)
  points: number;  // required points
}


export interface UserIdentity {
  identity_id: string;
  id: string;
  provider: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
}

export interface AppMetadata {
  provider: string;
  providers: string[];
}

export interface UserMetadata {
  email: string;
  email_verified: boolean;
  name: string;
  phone_verified: boolean;
  [key: string]: any; // in case there are extra fields
}

export interface IUserProfile {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_verified: boolean;
  phone: string;
  is_anonymous: boolean;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
  app_metadata: AppMetadata;
  user_metadata: UserMetadata;
  identities: UserIdentity[];
  sub: string;
}
