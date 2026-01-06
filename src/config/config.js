import dotenv from 'dotenv';

dotenv.config();

const config = {
    name: process.env.NAME || "",
    port: process.env.PORT || 5000,
    version: process.env.VERSION || "1.0", 
    jwtSecret: process.env.JWT_SECRET || "",
    feature: {
        admin: {
            enabled: parseInt(process.env.FEATURE_ADMIN_ENABLED) || false
        }
    },
    mongodbUrl: process.env.MONGODB_URL || ""
}

// Log the secret key for debugging
console.log("JWT_SECRET: ", config.jwtSecret);

export default config;
