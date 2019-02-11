import { UUID } from 'angular2-uuid';

export class Admin {
    Id: number;
    Username: string;
    Email: string;
    Password: string;
    PhoneNumber: string;
    IsActive: boolean;
    Token = UUID.UUID();
}
