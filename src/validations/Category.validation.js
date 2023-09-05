const joi = require('joi')

/**create category */

const CreateCategory = {
    body: joi.object().keys({
        category_name: joi.string().required().trim(),
        category_desc: joi.string().required().trim(),
        is_active: joi.string().required().trim(),
    }),
};

module.exports = {
    CreateCategory
};