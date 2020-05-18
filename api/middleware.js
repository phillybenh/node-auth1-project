
const express = require('express');

const db = require('../database/connection');

module.exports = {
    restricted,

}

function restricted(req, res, next) {
    console.log(req.url)

    // swithing to a blacklsit instead to match the README
    const blacklist = '/api/users/*';
    if (blacklist.indexOf(req.url) === -1) {
        next();
    }
    else if (req.session && req.session.loggedIn) {
        next();
    } else {
        res.status(401).json({ you: "You must log in to access this." });
    }
}
// whitelist for the unrestricted
// function restricted(req, res, next) {
//     console.log(req.url)

//     // whitelist for the unrestricted
//     const whitelist = ['/', '/api/register', '/api/login'];
//     if (whitelist.indexOf(req.url) !== -1) {
//         next();
//     }
//     else if (req.session && req.session.loggedIn) {
//         next();
//     } else {
//         res.status(401).json({ you: "You must log in to access this." });
//     }
// }


