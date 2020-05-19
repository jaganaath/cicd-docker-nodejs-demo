const express = require('express');
const app = express();
var constants = require('./constants');
require('./default_runs/prod')(app);
/*
const git_commit_hash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString().trim();
*/
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/status', (req, res) => {
    const status_response = {
        "myapplication": [
          {
            "version": constants.version,
            "description": constants.description,
            "lastcommitsha": process.env.ENV_GIT_COMMIT_HASH
          }
        ]
      };
    res.send(status_response);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));