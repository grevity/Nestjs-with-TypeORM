import { User } from '../models/user.dto';
import { Observable } from "rxjs";
import { UserService } from '../service/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(userBody: User): Observable<User>;
}
