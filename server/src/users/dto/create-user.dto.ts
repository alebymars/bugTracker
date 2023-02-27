export class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly isActivated: boolean;
    readonly activationLink: string;
    readonly avatar: string;
    readonly role: string;
    readonly token: string;
}