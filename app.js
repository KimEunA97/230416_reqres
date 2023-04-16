import { APIKEY } from './key.js'
import http from 'http'
import fs from 'fs'
import HTMLparser from 'htmlparser2'


let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${APIKEY}&pageNo=1&numOfRows=1000&dataType=XML&base_date=20230416&base_time=0600&nx=55&ny=127`


console.log("url", url);


const server = http.createServer(function (req, res) {

  if (req.method === "GET" && req.url === '/') {

    fs.readFile('./test.html', function (error, data) {

      if (error) {
        res.writeHead(404);
      }

      else {

        res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
        res.end(data);

      }
    })
  }

  if (req.method === 'POST' && req.url === '/location') {

    let body = "";

    req.on('data', function (data) {

      body += data;

    });

    req.on('end', function () {

      console.log(body);

      req.writeHead(200);
      req.end()
    })

  }

})


server.listen(2080, function (error) {

  if (error) {
    console.log("Server error");
  }

  else {

    console.log("Server working");

  }

})
