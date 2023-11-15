import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import KpisRoute from "./routes/KpisRoute.js";
import ProductsRoute from "./routes/ProductsRoute.js";
import TransactionRoute from "./routes/TransactionsRoute.js";
import { kpis, products, transactions } from "./data/data.js";
import KpisModal from "./models/KpiModal.js";
import ProductsModel from "./models/ProductsModal.js";
import TransactionsModel from "./models/TransactionsModal.js";

// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

// Routes
app.use("/kpis", KpisRoute);
app.use("/products", ProductsRoute);
app.use("/transactions", TransactionRoute);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();
    // KpisModal.insertMany(kpis);
    // ProductsModel.insertMany(products);
    // TransactionsModel.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));
