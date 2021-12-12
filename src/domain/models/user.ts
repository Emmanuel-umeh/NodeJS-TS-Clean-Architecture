export type UserModel = {
  // Attributes
  id: string | number;
  name: string;
  age: number;
};

export type AddUserParams = Omit<UserModel, "id">;
