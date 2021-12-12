import { UserModel } from "@/domain/models/user";
import { model, Schema } from "mongoose";

const schema = new Schema<UserModel>({
  // Implementation
  id: { type: String },
  name: { type: String },
  age: { type: Number },
  email: { type: String },
});

export const UserModelSchema = model<UserModel>("users", schema);
