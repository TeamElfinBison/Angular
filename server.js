const config = require('./server/config');

Promise.resolve()
    .then(() => require('./server/database')(config.DB_CONNECTION_STRING))
    .then((database) => require('./server/data')(database))
    .then((data) => require('./server/app')(data))
    .then((app) => {
        // eslint-disable-next-line
        app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}..`));
    });
