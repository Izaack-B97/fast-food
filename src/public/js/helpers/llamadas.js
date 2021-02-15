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

    postToServer: async ( endpoint, datos ) => {
        
        console.log( endpoint )
        console.log( data )

        try {
            const { data } = await axios.post(`http://localhost:3030/server/${ endpoint }`, datos);
            return data;
        } catch (error) {
            return error;
        }
        
    },

    putToServer: async ( endpoint, data ) => {
        try {
            const { data } = await axios.put(`http://localhost:3030/server/${ endpoint }`, data);
            return data;
        } catch (error) {
            return error;
        }
    },

    deleteToServer: async () => {
        try {
            const { data } = await axios.delete(`http://localhost:3030/server/${ endpoint }`);
            return data;
        } catch (error) {
            return error;
        }
    }
 
};
