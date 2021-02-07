const axios = require('axios');

module.exports = {
    getToServer: async ( endpoint ) => {
        return await axios.get(`http://localhost/server/${ endpoint }`);
    }
};