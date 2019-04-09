exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'Fastify API',
            description: 'Building a blazing fast REST API with NodeJS, MongoDB, Fastify and Swagger',
            version: '1.0.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        },
        host: 'localhost',
        schemes: ['https'],
        consumes: ['application/json'],
        produces: ['application/json']
    }
}