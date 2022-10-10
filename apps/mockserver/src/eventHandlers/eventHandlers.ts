import { Server } from 'socket.io';
import { getStateEvents } from './stateEvents';

interface Socket<OnData, EmitData> {}

export type AppData = {
    allSockets: Socket<any, any>[];
};

const app: AppData = {
    allSockets: [],
};

export default (io: Server) => {
    let interval;
    io.on('connection', (socket) => {
        const eventHandlers = [getStateEvents];
        interval = setInterval(() => {
            app.allSockets.forEach((socket) => {
                io.emit('STATE', getStateEvents());
            });
        }, 1000);

        eventHandlers.forEach((handler) => {
            for (let eventName in handler) {
                socket.on(eventName, handler[eventName]);
                console.log(`Event ${eventName} registered`);
            }
        });

        app.allSockets.push(socket);
    });

    io.on('disconnect', (socket) => {
        if (app.allSockets.includes(socket)) {
            console.log('Socket disconnecting, removing from stack');
            delete app.allSockets[socket];
        }

        clearInterval(interval);
    });
};
