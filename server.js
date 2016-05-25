require('http')
    .createServer((request, response) => response.end(request.url))
    .listen(3000, () => console.log('Server running @ port 3000'))
