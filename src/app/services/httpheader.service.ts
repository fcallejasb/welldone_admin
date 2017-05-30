import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpHeaderService {
    optHeaders: RequestOptions;
}