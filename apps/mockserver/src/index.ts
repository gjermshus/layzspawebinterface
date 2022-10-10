import { WebSocketServer } from 'ws';
import { getOtherEvents, getStateEvents, getTimesEvents } from './eventHandlers/stateEvents';

const wss = new WebSocketServer({ port: 3101 });

let interval = setInterval(() => {
    console.log('Sending state events to ', wss.clients.size, ' clients');

    wss.clients.forEach((client) => {
        client.send(getStateEvents());
        client.send(getTimesEvents());
        client.send(getOtherEvents());
    });
}, 1000);

wss.on('connection', function connection(ws) {
    console.log('Client connected');
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
});

wss.on('close', (ws) => {
    console.log('Client disconnected');
    clearInterval(interval);
});

wss.on('message', function message(data) {
    console.log('received: %s', data);
});
