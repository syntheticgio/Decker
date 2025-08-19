const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'js/build' directory
app.use(express.static(path.join(__dirname, 'js/build')));

app.listen(port, '127.0.0.1', () => {
  console.log(`Decker is live at http://127.0.0.1:${port}/decker.html`);
});
