import { ApiProperty } from "@nestjs/swagger";

export class SignUpDTO {
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;
    
    @ApiProperty()
    password: string;
}

export class SignInDTO {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}