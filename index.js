// import json server
const jsonServer = require('json-server')
// create server for Employee
const EMPServer = jsonServer.create()
// create middle ware to understand the data
const middleware = jsonServer.defaults()
// set route for json file
const route = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT
EMPServer.use(middleware)
EMPServer.use(route)
EMPServer.listen(PORT,()=>{
    console.log(`Employee  server started at port ${PORT} and waiting for client response`);
    
})