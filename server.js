const express = require("express");
const cors = require("cors");
const Papa=require('papaparse')
const clients = new Map();
const {
  rtConnect,
  rtSubscribe,
  rtUnsubscribe,
  rtFeed,
  historical,
  formatTime,
} = require("truedata-nodejs");
const http = require("http");

const app = express();
app.use(cors({ origin: "*" }));
const server = http.createServer(app); // create http server
const user = "wssand022";
const pwd = "subhra022";
const port = 8084;

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(3006, () => {
  console.log("Server listening on port 3006");
});

// rtConnect(user, pwd, symbol, port, (bidask = 1), (heartbeat = 1));
// rtFeed.on('bar', barHandler);
// function barHandler(bar){
// 	console.log(bar)
// }
// Get the current hour and minute

// rtFeed.on('touchline', (touchline)=>{
//     console.log(touchline)
//     // socket.emit("data", touchline);
// });
let symbols = ['TCS','RELIANCE','NIFTY-I', 'BANKNIFTY-I', 'CRUDEOIL-I'];

io.on("connection", (socket) => {
  rtConnect(user, pwd, symbols, port, (bidask = 1), (heartbeat = 0),replay = 0);
  const { symbol } = socket.handshake.query;
  rtFeed.on("tick", (ticks) => {
     console.log(ticks)
   
    // const filteredData = Object.values(ticks).filter((item) => item.Symbol === symbol);
    // if (touchline.Symbol === symbol) {
    //         filteredTicks.push(tick);
    //       }
          // console.log(filteredData)
          if(ticks.Symbol==symbol)
    socket.emit("data", ticks);
    
    // console.log(filteredTicks)
   
  });
//   rtFeed.on('touchline', (touchline)=>{
//     console.log(touchline)
//     // const filteredTicks = [];
//     const filteredData = Object.values(touchline).filter((item) => item.Symbol === symbol);
//     // if (touchline.Symbol === symbol) {
//     //         filteredTicks.push(tick);
//     //       }
//           console.log(filteredData)
//     socket.emit("data", filteredData);
// });
  socket.on("disconnect", () => {
    console.log("Client disconnected")
  });

  // Remove the symbol for the client

  //     rtFeed.on('heartbeat', (heartbeat)=>{
  //         socket.emit("heartbeat", heartbeat);
  //         console.log(heartbeat)
  // });
  // rtFeed.on('touchline', (touchline)=>{
  //     console.log(touchline)

  //     socket.emit("data", touchline);
  // });
  // rtFeed.on('bar', barHandler);
  // function barHandler(bar) {
  //        console.log(bar
  //     }
  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
  // });
});
// historical.auth(user, pwd);
// from = formatTime(2022, 3, 2, 9, 15); // (year, month, date, hour, minute) // hour in 24 hour format
// to = formatTime(2022, 3, 2, 9, 16); // (year, month, date, hour, minute) // hour in 24 hour format
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

// historical
//   .getTickData('SBIN', '1D', (bidask = 1), (response = 'csv'), (getSymbolId = 0))
//   .then((res) => {
//   const results = Papa.parse(res, { header: true });
//     const jsonData = results.data;
//     console.log(jsonData);
//   })
//   .catch((err) => console.log(err));

// // historical
// //   .getLTP('L&TFH')
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));
// // historical.getTopGainers (topsegment = 'NSEFUT', top = 50, response = 'json').then((res) => console.log(res))
// //   .catch((err) => console.log(err));
// // historical.getTickData ("ABB23MARFUT", from, to, bidask = 1, response = 'json', getSymbolId = 0) .then((res) => console.log(res))
// //   .catch((err) => console.log(err));
//   server.listen(3001)
