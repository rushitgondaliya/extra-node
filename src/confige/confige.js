const joi = require('joi');
const dotenv = require('dotenv');

dotenv.config();

const envVarsSchema = joi.object({
    PORT: joi.number().default(3000),
    MONGODB_URL: joi.string().trim().description("mongodb url")
}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ error: { label: "key" } })
    .validate(process.env);

module.exports = {
    port: envVars.port,
    mongodb: {
        url: envVars.MONGODB_URL,
        Option: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    }
}