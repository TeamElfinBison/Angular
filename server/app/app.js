const express = require('express');
const app = express();

const init = (data) => {
    require('./app.config')(app, data);

    const api = require('./routes')(data);
    app.use('/api', api);

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../dist/index.html'));
    });

    return Promise.resolve(app);
};

module.exports = init;
