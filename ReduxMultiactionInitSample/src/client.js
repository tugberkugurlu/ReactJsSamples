import _ from 'underscore';

const users = [
    {id: 1, name: 'Tugberk'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Alice'}
];

const categories = [
    {id: 1, name: 'Software'},
    {id: 1, name: 'Conferences'}
];

module.expors = {
    getCurrentUser: () => {
        return new Promise((resolve, reject) => {
            var user = _(users).find((user) => user.id === 1);
            window.setTimeout(() => {
                resolve(user);
            }, 3000)
        })
    },

    getCategories: () => {
        return new Promise((resolve, reject) => {
            window.setTimeout(() => {
                resolve(categories);
            }, 3000)
        })
    }
};