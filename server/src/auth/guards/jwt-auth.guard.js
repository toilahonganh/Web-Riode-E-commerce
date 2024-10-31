// import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { JwtService } from '@nestjs/jwt';
// import { Reflector } from '@nestjs/core';
// import { AuthService } from '../auth.service';
// @Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') {
//     constructor(private reflector: Reflector, private jwtService: JwtService, private authService: AuthService) {
//         super();
//     }
//     async canActivate(context: ExecutionContext): Promise<boolean> {
//         const request = context.switchToHttp().getRequest();
//         const token = request.headers['authorization']?.split(' ')[1]; // Lấy token từ Authorization header
//         if (!token) {
//             throw new UnauthorizedException('No token provided');
//         }
//         try {
//             const payload = await this.authService.validateToken(token); // Sử dụng validateToken
//             request.user = payload; // Lưu payload vào request
//             return true;
//         } catch (error) {
//             throw new UnauthorizedException('Invalid token');
//         }
//     }
//     /**
//      * Extract JWT token from the request's Authorization header.
//      * @param request - The request object.
//      * @returns The JWT token or null if not found.
//      */
//     private extractTokenFromRequest(request: any): string | null {
//         const authHeader = request.headers['authorization'];
//         if (authHeader && authHeader.startsWith('Bearer ')) {
//             return authHeader.split(' ')[1];
//         }
//         return null;
//     }
// }
