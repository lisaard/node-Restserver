require('dotenv').config();
const Server = require('./models/server');

const server = new Server();




server.listen(process.env.PORT || 5000)