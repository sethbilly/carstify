// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
});

// Connect to DB
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/mycargarage')
.then( () => console.log('MongoDB connected...'))
.catch( err => console.log(err));

// Declare a route

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
});

const routes = require(`./routes`);
routes.forEach((route, index) => {
    fastify.route(route)
});

//Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Run the server
const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.swagger()
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log(err);
        process.exit(1);
    }
}
start();