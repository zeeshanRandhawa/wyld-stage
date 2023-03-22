const express = require("express");
const userRouter = require("./routes/UserRoute");
const teamRouter = require("./routes/TeamRoute");
const app = express();
const cors = require("cors");
const menuRouter = require("./routes/MenuRoute");
const reservationRouter = require("./routes/ReservationRoute");

// const corsOptions = {
//     origin: 'http://localhost:3000', // allow requests from this origin
//     optionsSuccessStatus: 200 // return 200 for preflight requests
//   };

//   app.use(cors(corsOptions)); // enable CORS with specific options

app.use(cors());
// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
//Static files:
app.use(express.static("public"));
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, 'public_html/index.html'));
});
//APIs
app.use("/api/v1/users", userRouter);
app.use("/api/v1/menu", menuRouter);
// app.use("/mails", mailer)
//Team Route
app.use("/api/v1/teams", teamRouter);
app.use("/api/v1/reservation", reservationRouter);

module.exports = app;
