import dotenv from 'dotenv';

dotenv.config();

function required(key, defaultValue = undefined) {
    const value = process.env[key] || defaultValue;
    if (value == null) {
        throw new Error(`key ${key} is undefined`)
    }
    return value;
}

export const config = {
    port: parseInt(required('PORT',8080)),
    db: {
        host: required('DB_HOST'),
        user: required('DB_USER'),
        database: required('DB_DATABASE'),
        password: required('DB_PASSWORD'),
    },
    cors: {
        allowedOrigin: required('CORS_ALLOWED_ORIGIN'),
    }
}