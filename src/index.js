const express = require('express');
const app = express();
const port = 443;
const route = require('./routes')
//change
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//Route
route(app);

app.listen(port, () => {
    console.log(`App listening on port localhost:${port}`);
});
