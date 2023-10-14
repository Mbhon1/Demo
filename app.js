import express from "express";
import cors from "cors";
import washesRoutes from "./washes/routes/washes.routes.js";
import swaggerUiExpress from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
const port = 3000;

// swagger definition
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Washes API",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./washes/routes/*.js"],
};

/* NOTE: Global middlewares*/
app.use(cors());
app.use(express.json());
app.use(
  "/api-docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerJSDoc(swaggerSpec)),
);

/* NOTE: Routes*/
app.use("/washes", washesRoutes);

/* NOTE: Server setup*/
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () =>
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`),
  );
}

export default app;
