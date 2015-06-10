//
// Pings the app around the rate of Force in production (30 rps)
//

var superagent = require('superagent')
    APP_URL = process.env.APP_URL;

superagent.get(APP_URL)