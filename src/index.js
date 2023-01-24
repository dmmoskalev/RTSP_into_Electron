const RtspStream = require('node-rtsp-stream');

// Camera Authentication
const ipAddress = '212.233.126.11:40013'; //  NOTE: replace it with your camera IP address

// Camera username and password
const username = 'admin';
const password = 'Admin123';

// A channel of camera stream
const stream = new RtspStream({
  // streamUrl: 'rtsp://' + username + ':' + password + '@' + ip_address +':554/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif',
  streamUrl: `rtsp://${username}:${password}@${ipAddress}/MediaInput/h264/stream_3`,
  wsPort: 9999,
});



