import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {

    constructor(_httpClient: HttpClient) { }
}
