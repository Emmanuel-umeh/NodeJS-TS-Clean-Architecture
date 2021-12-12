import { UserModel } from "@/domain/models/user";
import { AddUserParams } from "./../../../domain/models/user";
import { IAddUserService } from "@/domain/use-cases/add-user-service";
import { ADD_USER_SERVICE } from "./../../../domain/use-cases/add-user-service";
import { Mapping, Get, Adapter, Post, Body } from "@tsclean/core";

@Mapping("api/v1/add-user")
export class AddUserController {
  constructor(
    @Adapter(ADD_USER_SERVICE) private readonly addUserService: IAddUserService
  ) {}

  // Example function
  @Get()
  async getWelcome(): Promise<any> {
    return "Welcome to the world of clean architecture";
  }

  @Post()
  async addUserController(@Body() data: AddUserParams): Promise<UserModel> {
    return await this.addUserService.addUserService(data);
  }
}
