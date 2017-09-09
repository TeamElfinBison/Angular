const { Router } = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config');
const { sendSuccess, sendError } = require('./responses');

const attachRouter = (data) => {
    const router = new Router();
    router
        .post('/register', (req, res) => {
            const user = req.body;

            data
                .addUser(user)
                .then(() => sendSuccess('Register success!', res, user))
                .catch((error) => sendError(error, res));
        })
        .post('/logout',
            // passport.authenticate('jwt', { session: false }),
            (req, res) => {
                sendSuccess('Logout success!', res);
            })
        .post('/login', (req, res) => {
            const user = req.body;

            data
                .findUserByUsername(user.username)
                .then((expUser) => {
                    return data.validateUserPassword(expUser, user.password);
                })
                .then((expUser) => {
                    const jwtObject = {
                        _id: user._id,
                        username: user.username,
                    };

                    const token = jwt.sign(jwtObject, config.APP_SECRET, {
                        expiresIn: 1440,
                    });

                    sendSuccess('Login success!', res, { token, user: expUser });
                })
                .catch((error) => sendError(error, res));
        })
        .get('/currentUser',
            passport.authenticate('jwt', { session: false }),
            (req, res) => {
                const user = req.user;

                data
                    .findUserById(user._id.toString())
                    .then((curr) => sendSuccess('Current user!', res, curr))
                    .catch((err) => sendError(err, res));
            })
        .post('/shoppingCart',
            passport.authenticate('jwt', { session: false }),
            (req, res) => {
                const user = req.user;
                const customPizza = req.body;

                data
                    .findUserById(user._id.toString())
                    .then((curr) => {
                        curr.cart.customPizza.push(customPizza);
                        curr.cart.price += customPizza.price;
                        return data.updateUser(curr);
                    })
                    .then((curr) => sendSuccess('Custom pizza on price: ' + customPizza.price + '$ added to cart', res, curr))
                    .catch((error) => sendError(error, res));
            })
        .put('/shoppingCart',
            passport.authenticate('jwt', { session: false }),
            (req, res) => {
                const user = req.user;
                const pizza = req.body;

                data
                    .findUserById(user._id.toString())
                    .then((curr) => {
                        curr.cart.pizza.push(pizza);
                        curr.cart.price += pizza.price;
                        return data.updateUser(curr);
                    })
                    .then((curr) => sendSuccess('Custom pizza on price: ' + pizza.price + '$ added to cart', res, curr))
                    .catch((error) => sendError(error, res));
            })
        .get('/shoppingCart',
            passport.authenticate('jwt', { session: false }),
            (req, res) => {
                const user = req.user;

                data
                    .findUserById(user._id.toString())
                    .then((curr) => sendSuccess('Shopping cart!', res, curr.cart))
                    .catch((error) => sendError(error, res));
            })
        .get('/products', (req, res) => {
            data
                .getAllProducts()
                .then((products) => sendSuccess('All products!', res, products))
                .catch((error) => sendError(error, res));
        })
        .get('/pizza', (req, res) => {
            data
                .getAllPizza()
                .then((pizza) => sendSuccess('All pizza!', res, pizza))
                .catch((error) => sendError(error, res));
        });

    return router;
};

module.exports = attachRouter;
