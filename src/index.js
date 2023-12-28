const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const route = require('./routes')
const morgan = require('morgan');

//change
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(morgan('combined'));
//Route
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
