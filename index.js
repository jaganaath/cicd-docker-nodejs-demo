// Index file

// Requires
const express = require('express');
const constants = require('./constants');
require('./default_runs/prod')(app);

const app = express();

// Root path
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Status API
app.get('/status', (req, res) => {
    const status_response = {
        "myapplication": [
          {
            "version": constants.version,                       // Values come from constants.js
            "description": constants.description,               // Values come from constants.js
            "lastcommitsha": process.env.ENV_GIT_COMMIT_HASH    // This needs a bit more work
          }
        ]
      };
    res.send(status_response);
});

// PORT - Check if the env variable for port is set, if not set it to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));