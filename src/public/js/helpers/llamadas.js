const axios = require('axios');

module.exports = { 
    getToServer: async ( endpoint ) => {
        try {
            const { data } = await axios.get(`http://localhost:3030/server/${ endpoint }`)
            return data;
        } catch (error) {
            return error;
        }
    }, 
 
    postToServer: () => {

    },

    putToServer: () => {
        
    },

    deleteToServer: () => {

    }

};
