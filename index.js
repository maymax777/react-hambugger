const config = require('./config');
const hambugger =  async (req) => {
    console.log(req);
    return new Promise((resolve, reject) => {
        fetch(`${config.HOST}${req}`)
        .then(response => {
            response.json()
            .then(res => {
                resolve(res);
            });
        })
        .catch(error => {
            reject(error);
        })
    });
};

module.export = {hambugger}