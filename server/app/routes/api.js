const { Router } = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const getResponse = (status, message, ...data) => {
    return {
        status,
        data,
        message,
    };
};

const sendSuccess = (msg, res, ...data) => {
    const response = getResponse(200, typeof msg === 'object' ? msg.message : msg, ...data);
    res.status(200).json(response);
}

const sendError = (err, res) => {
    const response = getResponse(400, typeof err === 'object' ? err.message : err);
    res.status(400).json(response);
};

const attachRouter = (data) => {

    const router = new Router();
    router
        .get('/users', (req, res) => {
            data
                .getAll()
                .then((users) => sendSuccess('All users!', res, users))
                .catch((err) => sendError(err, res));
        })
        .post('/register', (req, res) => {
            const user = req.body;

            data
                .add(user)
                .then((user) => sendSuccess('Register success!', res, user))
                .catch((error) => sendError(error, res));
        })
        .post('/login', (req, res) => {
            const user = req.body;

            data
                .findUserByUsername(user.username)
                .then((expUser) => data.validateUserPassword(expUser, user.password))
                .then(() => {
                    const jwtObject = {
                        _id: user._id,
                        username: user.username,
                    };

                    const token = jwt.sign(jwtObject, config.APP_SECRET, {
                        expiresIn: 1440,
                    });

                    sendSuccess('Login success!', res, { token });
                })
                .catch((error) => sendError(error, res));
        });

    return router;
};

module.exports = attachRouter;
