const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// API logic here...

app.listen(port, () => console.log(`App running on port ${port}`));
