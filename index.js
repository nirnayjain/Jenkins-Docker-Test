// const { rtConnect, rtSubscribe, rtUnsubscribe, rtFeed, historical, formatTime } = require('truedata-nodejs');
// const server = require('http').createServer();
// const app=require('express')();
// const io = require('socket.io')(server);
// const user = 'wssand022';
// const pwd = 'subhra022';
// const port = 8084;

// const symbols = ['TCS']; // symbols in array format

// rtConnect(user, pwd, symbols, port, (bidask = 1), (heartbeat = 1));

//   // rtFeed.on('touchline', touchlineHandler);
//  //rtFeed.on('bidask', bidaskHandler);
// // rtFeed.on('bar', barHandler);
// // rtFeed.on('marketstatus', marketStatusHandler)
// // rtFeed.on('heartbeat', heartbeatHandler);


//   io.on('connection', (socket) => {
//     console.log('Client connected');
  
//     // When data is received from the third-party API
//     // broadcast it to all connected clients
   
    
//   rtFeed.on('tick', (tick)=>{
//     socket.emit('data', tick);
//   });
    
//   });
// //   function touchlineHandler(touchline) {
// //    console.log(touchline)
// // }

// // function tickHandler(tick) {
// //   console.log(tick);
// // }

// // function bidaskHandler(bidask) {
// //   console.log(bidask);
// // }

// // function barHandler(bar) {
// //   console.log(bar);
// // }

// // function marketStatusHandler(status) {
// //   console.log(status);
// // }

// // function heartbeatHandler(heartbeat) {
// //     console.log(heartbeat);
// // }

 historical.auth(user, pwd); // For authentication

// // from = formatTime(2022, 3, 2, 9, 15); // (year, month, date, hour, minute) // hour in 24 hour format
// // to = formatTime(2023, 3, 5, 9, 15); // (year, month, date, hour, minute) // hour in 24 hour format

// // historical
// //   .getBarData('NIFTY-I',from,to, (interval = '1min'), (response = 'json'), (getSymbolId = 0))
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));

// // historical
// //   .getBarData('RELIANCE', from, to, (interval = '1min'), (response = 'json'), (getSymbolId = 0))
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));

// // historical
// //   .getBarData('NIFTY 50', (duration = '1W'), (interval = '60min'), (response = 'json'), (getSymbolId = 0))
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));

// // historical
// //   .getTickData('SBIN', '1D', (bidask = 1), (response = 'csv'), (getSymbolId = 0))
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));

// // historical
// //   .getLTP('L&TFH')
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));
// // historical.getTopGainers (topsegment = 'NSEFUT', top = 50, response = 'json').then((res) => console.log(res))
// //   .catch((err) => console.log(err));
// // historical.getTickData ("ABB23MARFUT", from, to, bidask = 1, response = 'json', getSymbolId = 0) .then((res) => console.log(res))
// //   .catch((err) => console.log(err));
//   server.listen(3001)