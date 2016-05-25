require('http')
    .createServer((req, res) => res.end(req.url))
    .listen(port=3000, () => console.log(`Server running @ port ${port}`))
