import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    // POST - /auth/signup
    @Post('signup')
    @ApiOperation({ summary: 'Registrar novo usuário' })
    @ApiBody({ type: SignUpDTO })
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
    async signup(@Body() body: SignUpDTO) {
        console.log({ body });

        return body;
    }

    // POST - /auth/signin
    @Post('signin')
    @ApiOperation({ summary: 'Autenticar usuário' })
    @ApiBody({ type: SignInDTO })
    @ApiResponse({ status: 200, description: 'Login realizado com sucesso' })
    async signin(@Body() body: SignInDTO) {
        console.log({ body });

        return body;
    }
}
