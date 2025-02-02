export const FEED_CONNECT = 'FEED_CONNECT';
export const FEED_WS_CONNECTING = 'FEED_WS_CONNECTING';
export const FEED_WS_ERROR = 'FEED_WS_ERROR';
export const FEED_WS_OPEN = 'FEED_WS_OPEN';
export const FEED_WS_CLOSE = 'FEED_WS_CLOSE';
export const FEED_WS_GET_FEED = 'FEED_WS_MESSAGE';
export const FEED_DISCONNECT = 'FEED_DISCONNECT';

export const Connect = (url) => ({
    type: FEED_CONNECT,
    payload: url
});

export const Disconnect = () => ({
    type: FEED_DISCONNECT
});