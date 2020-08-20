import { User } from '../models/user.entity';
import { Repository } from 'typeorm';
import { Observable } from 'rxjs';
import { User as UserDto } from '../models/user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(user: UserDto): Observable<UserDto>;
}
