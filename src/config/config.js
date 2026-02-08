import dotenv from 'dotenv';

dotenv.config();

const config = {
    appUrl: process.env.APP_URL || "",
    name: process.env.NAME || "",
    port: process.env.PORT || 5000,
    version: process.env.VERSION || "1.0", 
    jwtSecret: process.env.JWT_SECRET || "",
    feature: {
        admin: {
            enabled: parseInt(process.env.FEATURE_ADMIN_ENABLED) || false
        }
    },
    mongodbUrl: process.env.MONGODB_URL || "",
    khalti:{
        apiUrl: process.env.KHALTI_API_URL || "",
        secret: process.env.KHALTI_SECRET_KEY || ""
    }
}

// Log the secret key for debugging
console.log("JWT_SECRET: ", config.jwtSecret);

export default config;
