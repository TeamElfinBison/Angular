const CryptoJS = require('crypto-js');

class Data {
    constructor(database) {
        this.users = database.collection('users');
    }

    findById(id) {
        if (typeof id !== 'string') {
            return Promise.reject('Invalid id!');
        }

        // eslint-disable-next-line
        return this.users.findOne({ _id: ObjectId(id) });
    }

    findUserByUsername(username) {
        if (typeof username !== 'string') {
            return Promise.reject('Invalid username!');
        }

        return this.users.findOne({ username });
    }

    validateUserPassword(user, password) {
        if (user === null) {
            return Promise.reject('Invalid user!');
        }

        // eslint-disable-next-line new-cap
        if (user.password !== CryptoJS.SHA1(password).toString()) {
            return Promise.reject('Invalid password!');
        }

        return Promise.resolve(user);
    }

    addUser(user) {
        return this.findUserByUsername(user.username)
            .then((currUser) => {
                if (currUser !== null) {
                    return Promise.reject(
                        'There is already a user with such username!');
                }

                // eslint-disable-next-line new-cap
                user.password = CryptoJS.SHA1(user.password).toString();
                return this.users.insert(user);
            });
    }

    getAllUsers() {
        return this.users.find().toArray();
    }
}

module.exports = Data;
