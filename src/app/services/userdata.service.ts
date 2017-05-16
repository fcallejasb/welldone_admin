import { Injectable } from '@angular/core';
import { User } from '../entities/user';

@Injectable()
export class UserDataService {
    currentUser: User;
}