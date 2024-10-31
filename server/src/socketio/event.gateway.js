// import {
//     OnGatewayConnection,
//     OnGatewayDisconnect,
//     OnGatewayInit,
//     WebSocketGateway,
//     WebSocketServer,
// } from "@nestjs/websockets";
// import { Server, Socket } from "socket.io";
// import { AuthService } from "src/auth/auth.service";
// @WebSocketGateway()
// export class EventGateway
//     implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
//     @WebSocketServer()
//     server: Server;
//     constructor(private readonly authService: AuthService) {}
//     async handleConnection(socket: Socket): Promise<any> {
//         const authHeader = socket.handshake.headers.authorization;
//         if (authHeader && (authHeader as string).split(' ')[1]) {
//             try {
//                 const email = await this.authService.handleVerifyToken(
//                     (authHeader as string).split(' ')[1]
//                 );
//                 socket.data.email = email;
//             } catch (error) {
//                 console.error("Token verification failed:", error);
//                 socket.disconnect();
//             }
//         } else {
//             socket.disconnect();
//         }
//     }
//     handleDisconnect(socket: Socket) {
//         console.log(socket.id, socket.data?.email);
//     }
//     afterInit(server: Server) {
//         // Optionally log that the gateway has been initialized
//         console.log("WebSocket Gateway Initialized");
//     }
// }
