const http = require('http');
const url = require('url');

const server = http.createServer((request,response)=>{
const {pathname} = url.parse(request.url)
	if (pathname === '/' ) {
  response.end(" Hi Gayes ^_^ ");
	}})
server.listen(3000,()=>{
  console.log(` the server up and running on port 3000!`);
});
