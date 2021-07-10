const fs = require("fs");
const express = require("express");
const path = require("path");
const multer = require("multer");
const sequelize = require("./util/database");
const helmet = require("helmet");
const compression = require("compression");

const { PORT } = require("./util/Constant");

//main gitlab code
// import all models here
const FaadaModel = require("./models/faada-model");
const BlockModel = require("./models/block-model");
const CustomerModel = require("./models/customer-model");
const PaymentModel = require("./models/payments-model");
const User = require("./models/user-model");
const ExpenseModel = require("./models/expense-model");
const SalesModel = require("./models/sales-model");
const SalesItemsModel = require("./models/sales-items-model");
const LocationModel = require("./models/location-model");
const DispatchModel = require("./models/dispatch-model");
const AttandenceModel = require("./models/attandence-model");
const SlabModel = require("./models/slab-model");
const port = PORT;

const app = express();

// import all error controllers here
const corsError = require("./middleware/error-handlers/cors-err");
const centralError = require("./middleware/error-handlers/err");

// all routes here
const authRoutes = require("./routes/auth-routes");
const expenseRoutes = require("./routes/expense-routes");
const paymentRoutes = require("./routes/payment-routes");
const customerRoutes = require("./routes/customer-routes");
const faadaRoutes = require("./routes/faada-routes");
const blockRoutes = require("./routes/block-routes");
const salesRoutes = require("./routes/sales-routes");
const attandenceRoutes = require("./routes/attandence-routes");
const factoryRoutes = require("./routes/factory-routes");

//multer file storage
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = "./images";
    //this will create the folder if not exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") +
        "-" +
        file.originalname.toString().replace(/\s/g, "-")
    );
  },
});

//multer file filter
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname));

// multer configuration
app.use(
  multer({
    storage: fileStorage,
    fileFilter: fileFilter,
  }).array("image")
);

app.use("/images", express.static(path.join(__dirname, "images")));

//handling the cors error here
app.use(corsError.corsErr);

//all the app routes
app.use("/auth", authRoutes);
app.use("/expense", expenseRoutes);
app.use("/payments", paymentRoutes);
app.use("/customer", customerRoutes);
app.use("/faada", faadaRoutes);
app.use("/block", blockRoutes);
app.use("/sales", salesRoutes);
app.use("/attandence", attandenceRoutes);
app.use("/factory", factoryRoutes);

app.use(helmet());
app.use(compression());

//central error handling middleware
app.use(centralError.getError);

// sync with database
sequelize
  .sync()
  .then(() => {
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
