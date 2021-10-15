const server = require('./server.js')
const port = process.envPORT || 6868

server.listen(port, () => {
    console.log(`\n***_Server Reporting for duty on port: ${port}_***\n`)
})