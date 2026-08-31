import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // POST - /auth/signup
    @Post('signup')
    @ApiOperation({ summary: 'Registrar novo usuário' })
    @ApiBody({ type: SignUpDTO })
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
    async signup(@Body() body: SignUpDTO) {
        await this.authService.signUp(body);

        return body;
    }

    // POST - /auth/signin
    @Post('signin')
    @ApiOperation({ summary: 'Autenticar usuário' })
    @ApiBody({ type: SignInDTO })
    @ApiResponse({ status: 200, description: 'Login realizado com sucesso' })
    async signin(@Body() body: SignInDTO) {
        await this.authService.signIn(body);

        return body;
    }
}
