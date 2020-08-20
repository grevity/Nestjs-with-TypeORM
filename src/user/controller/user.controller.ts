import { Controller, Post, Body } from '@nestjs/common';
import { User } from '../models/user.dto';
import { Observable } from "rxjs";
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Post("new")
    create(@Body() userBody: User): Observable<User> {
        return this.userService.create(userBody);
    }
}
