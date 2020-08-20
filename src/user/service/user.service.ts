import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user.entity';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';
import { User as UserDto } from '../models/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) 
        private readonly userRepository: Repository<User>
    ){}

    create (user: UserDto): Observable<UserDto> {
        return from(this.userRepository.save(user));
    }
}
