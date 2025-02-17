import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Documentación API To-Do List",
    version: "1.0.0",
    description: "Esta API es la encargada de realizar las operaciones CRUD entre nuestra aplicación To-Do List y la base de datos de posgreDB. Se utilizó Express y Typescript para el API, Sequelize como ORM para la base de datos PosgreSQL.",
  },
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;