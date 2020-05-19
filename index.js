const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/status', (req, res) => {
    const status_response = {
        "myapplication": [
          {
            "version": "1.0",
            "description": "pre-interview technical test",
            "lastcommitsha": "abc57858585"
          }
        ]
      };
    res.send(status_response);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));