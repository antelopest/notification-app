import { io, Socket } from 'socket.io-client';

class SocketClient {
  private socket: Socket | null = null;

  connect() {
    this.socket = io('http://localhost:3000/notifications');

    this.socket.on('connect', () => {
      console.log('Connected');
    });

    this.socket.on('new-notification', (data) => {
      console.log('Notification:', data);
    });
  }

  sendNotification(data: any) {
    this.socket?.emit('send-notification', data);
  }

  disconnect() {
    this.socket?.disconnect();
  }
}

export const socketClient = new SocketClient();