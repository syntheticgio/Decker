const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'js' directory
app.use(express.static(path.join(__dirname, 'js')));

app.listen(port, '127.0.0.1', () => {
  console.log(`Decker is live at http://127.0.0.1:${port}/build/decker.html`);
});
