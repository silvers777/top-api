import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    register(dto: AuthDto): Promise<void>;
    login(dto: AuthDto): Promise<void>;
}
