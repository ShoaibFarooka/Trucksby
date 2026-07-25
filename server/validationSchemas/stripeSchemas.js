const yup = require('yup');

const createCheckoutSchema = yup.object().shape({
    priceId: yup.string().trim().required('Price Id is required'),
    successRedirectUrl: yup.string().trim().optional(),
    cancelRedirectUrl: yup.string().trim().optional(),
});

module.exports = {
    createCheckoutSchema,
}