// Interface specifying the expected properties for user session management.
interface UserType {
  id: string;
  name: string;
  email: string;
  avatar: string;
  premiumSubscription: boolean;
  accessToken: string;
  refreshToken: string;
  subId: string;
}

// Type specifying the format of user data as received from the backend.
type UserResponseType = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  premium_subscription: boolean;
  access_token: string;
  refresh_token: string;
  sub_id: string;
};

export type { UserType, UserResponseType };
