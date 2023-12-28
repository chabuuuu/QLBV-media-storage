const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes')

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
