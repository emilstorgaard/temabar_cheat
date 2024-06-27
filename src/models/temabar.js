const axios = require('axios');
const { config } = require('../config/config');

class Temabar {
    async visit() {
        try {
            const visitResponse = await axios.post(`${config.temabarUrl}/visit`);
            const token = visitResponse.data.token;
            if (!token) {
                throw new Error("Token not found in visit response");
            }
            return token;
        } catch (error) {
            console.error(`Request error during visit: ${error.message}`);
            throw error;
        }
    }

    async register(email, token) {
        const registrationData = {
            token: token,
            first_name: "test",
            last_name: "test",
            email: email,
            phone_country: "DK",
            phone: "+4520782215",
            birthday: "1040428800",
            cb_konkurrencebetingelser: "1",
            cb_gdpr: "1"
        };
        try {
            await axios.post(`${config.temabarUrl}/register`, registrationData);
        } catch (error) {
            console.error(`Request error during register: ${error.message}`);
            throw error;
        }
    }

    async finish(token) {
        try {
            const finishResponse = await axios.post(`${config.temabarUrl}/finish`, { token: token });
            const prizeName = finishResponse.data.prize_name;
    
            if (prizeName) {
                return prizeName;
            } else {
                throw new Error("No prize name found in the response");
            }
        } catch (error) {
            console.error(`Request error during finish: ${error.message}`);
            throw error;
        }
    }
}

module.exports = new Temabar();