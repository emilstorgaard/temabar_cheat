require("dotenv").config();

// APP_PORT is not required, it defaults to port 8080
const requiredEnvVars = [];

for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        console.error(`Missing or empty value for required environment variable: ${envVar}`);
        process.exit(1); // Exit the process with an error code
    }
}

const temabarUrl = 'https://game.scratcher.io/temabar-viborg-sommerhjul';

const loadConfig = () => {
    for (const envVar of requiredEnvVars) {
        if (!process.env[envVar]) {
            console.error(`Missing or empty value for required environment variable: ${envVar}`);
            process.exit(1);
        }
    }

    return {
        APP_PORT: process.env.APP_PORT || 8080,
        temabarUrl
    };
};

const config = loadConfig();

module.exports = {
    config
};