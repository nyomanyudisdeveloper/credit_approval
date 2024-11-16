// const swaggerJSDoc = require('swagger-jsdoc');
import swaggerJSDoc from 'swagger-jsdoc'

const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'Credit Approval API',
      version: '1.0.0',
      description: 'API documentation for credit approval',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Update with your base URL
        description: 'Local server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your route files with Swagger annotations
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec
