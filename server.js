const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'js/build' directory
app.use(express.static(path.join(__dirname, 'js/build')));

app.listen(port, '0.0.0.0', () => {
  console.log(`Decker is live at http://0.0.0.0:${port}/decker.html`);
});
