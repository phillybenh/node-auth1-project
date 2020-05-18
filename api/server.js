const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const usersRouter = require("../users/users-router.js");
const authRouter = require("../auth/auth-router.js");
const { restricted } = require("../api/middleware")

const server = express();

const sessionConfig = {
    cookie: {
        maxAge: 1000 * 60 * 60, // one hour in milliseconds
        secure: process.env.SECURE_COOKIE || false, // send the cookie only over https, true in production
        httpOnly: true, // true means client JS cannot access the cookie
    },
    resave: false,
    saveUninitialized: process.env.USER_ALLOWED_COOKIES || true,
    name: "boogers",
    secret: process.env.COOKIE_SECRET || "keepitsecret,keepitsafe!",
};

// create a session and send a cookie back (the cookie will store the session id)
server.use(session(sessionConfig)); // turn on sessions for the API

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(restricted); // is this global middleware?

server.use("/api", authRouter);
server.use("/api", authRouter);
server.use("/api/users/", usersRouter);

server.get("/", (req, res) => {
    res.json({ api: "up" });
});

module.exports = server;