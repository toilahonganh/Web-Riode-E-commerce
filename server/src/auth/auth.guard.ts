// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { AuthService } from './auth.service'; 

// @Injectable()
// export class AuthGuard implements CanActivate {
//     constructor(private readonly authService: AuthService) {}

//     async canActivate(context: ExecutionContext): Promise<boolean> {
//         const request = context.switchToHttp().getRequest();
//         const token = request.headers['authorization']; 

//         return await this.authService.validateToken(token); // Hàm validateToken sẽ trả về true/false
//     }
// }
