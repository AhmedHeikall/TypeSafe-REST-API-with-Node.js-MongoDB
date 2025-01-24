import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

const app = express();

// middleware
app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log("Server running on http://localhost:8080/");
});

// connect to database
// const MONGO_URL =
//   "mongodb+srv://aheikal424:BJcsRzUjoMTXyAeo@cluster0.86ea2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.Promise = Promise;
// mongoose.connect(MONGO_URL);
// mongoose.connection.on("erroe", (error: Error) => console.log(error));
