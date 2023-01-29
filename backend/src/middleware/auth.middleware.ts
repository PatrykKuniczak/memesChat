import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { AuthService } from "../auth/services/auth.service";
import { UsersService } from "../users/services/users.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {
  }

  async use(request: Request, response: Response, next: NextFunction) {
    const tokenArray = request.headers["authorization"].split(" ");

    if (!tokenArray) throw new UnauthorizedException();

    const paramsId = +request.params[0].split("/").at(-1);

    const id = await this.authService.verifyJwt(tokenArray[1], paramsId);

    const user = await this.userService.findOneBy({ id });

    if (user) {
      request.user = user;
      next();
    }
  }
}
