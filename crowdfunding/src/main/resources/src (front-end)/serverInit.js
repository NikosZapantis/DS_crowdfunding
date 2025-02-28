const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// App is using static the current directory
app.use(express.static(__dirname));

// Protecting critical points with helmet
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: 'DENY' }));
app.use(helmet.dnsPrefetchControl({}));
app.use(helmet.noSniff({}));
app.use(helmet.ieNoOpen({}));
app.use(helmet.xssFilter());
app.use(helmet.hsts({}));

// Server running on localhost port 7000
const port = 7000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});