import express, { Request, Response, Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./handlers/user";
import productRoutes from "./handlers/product";
import orderRoutes from "./handlers/order";

const app: Application = express();
const port: number = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

userRoutes(app);
productRoutes(app);
orderRoutes(app);

app.listen(port, function () {
  console.log(`server started at localhost:${port}`);
});

export default app;
