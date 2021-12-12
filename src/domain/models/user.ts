export type UserModel = {
  // Attributes
  id?: string | number;
  name: string;
  age?: number;
  email: string;
};

export type AddUserParams = Omit<UserModel, "id">;
