var http = require('http');
var url = require('url');
var convertDockerRunToCompose = require('composerize');

var port = process.argv[2]
if (typeof(port) === 'undefined'){
    console.log('没有设置端口，默认端口为8888')
    port = 8888
}

http.createServer(function(request, response){

	response.writeHead(200, {'ContentType':'text/plain'});
	// 获取参数
	const path = url.parse(request.url, true).query;

    response.write('#############################################################################################\n');
    response.write('##                                                                                         ##\n');
    response.write('##  Change url                                                                             ##\n');
    response.write('##  example: http://domain?dc=docker run -d -p 8080:80 --name my-web-app nginx:latest      ##\n');
    response.write('##                                                                                         ##\n');
    response.write('#############################################################################################\n\n\n');
    var res = ''
    if (typeof(path.dc) !== 'undefined'){
        res = 'After the conversion is:\n\n' + convertDockerRunToCompose(path.dc)
    }

	response.write(res);
	response.write('\n');
	response.end();
}).listen(port);

console.log('Server run at http://localhost:'+port);
