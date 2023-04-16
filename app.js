import { APIKEY } from './key.js'


let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${APIKEY}&pageNo=1&numOfRows=1000&dataType=XML&base_date=20230416&base_time=0600&nx=55&ny=127`


console.log("url", url);


// import http from 'http'
// import fs from 'fs'

// const server = http.createServer(function (req, res) {

//   if(req.method === "GET"){

//     fs.readFile("")

//   }

// })


// server.listen(2080, function (error) {

//   if (error) {
//     console.log("Server error");
//   }

//   else {

//     console.log("Server working");

//   }

// })
