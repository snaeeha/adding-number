const http = require('http');

const hostname = '127.0.0.1';
const port = 5500;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function Add(){
    numOne=parseInt(calculation.numOne.value);
    numTwo=parseInt(calculation.numTwo.value);
    result = numOne + numTwo;
    calculation.result.value=result;
 }
 function Substraction(){
    numOne=parseInt(calculation.numOne.value);
    numTwo=parseInt(calculation.numTwo.value);
    result = numOne - numTwo;
    calculation.result.value=result;
 }
 function Multiply(){
    numOne=parseInt(calculation.numOne.value);
    numTwo=parseInt(calculation.numTwo.value);
    result = numOne * numTwo;
    calculation.result.value=result;
 }
 function Division(){
    numOne=parseInt(calculation.numOne.value);
    numTwo=parseInt(calculation.numTwo.value);
    result = numOne / numTwo;
    calculation.result.value=result;
 }