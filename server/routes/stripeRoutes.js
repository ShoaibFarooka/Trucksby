const router = require("express").Router();
const controller = require("../controllers/stripeController");
const authMiddleware = require("../middleware/authMiddleware");
const stripeSchemas = require('../validationSchemas/stripeSchemas');
const validationMiddleware = require('../middleware/validationMiddleware');

router.post(
    "/create-checkout-session",
    authMiddleware.authenticateRequest,
    // authMiddleware.verifyRole(['seller']),
    validationMiddleware.validateRequest(stripeSchemas.createCheckoutSchema),
    controller.CreateCheckoutSession
);

router.post(
    "/webhooks",
    controller.StripeHooks
);


router.get("/mobile-redirect/success", (req, res) => {
    const redirectUrl = req.query.redirectUrl || '';
    res.send(`
        <!DOCTYPE html>
        <html>
        <head></head>
        <body>
            <p>Payment successful! Redirecting back to the app...</p>
            <script>
                window.location.href = "${redirectUrl}";
            </script>
            <a href="${redirectUrl}">Tap here if not redirected</a>
        </body>
        </html>
    `);
});

router.get("/mobile-redirect/cancel", (req, res) => {
    const redirectUrl = req.query.redirectUrl || '';
    res.send(`
        <!DOCTYPE html>
        <html>
        <head></head>
        <body>
            <p>Checkout cancelled. Redirecting back to the app...</p>
            <script>
                window.location.href = "${redirectUrl}";
            </script>
            <a href="${redirectUrl}">Tap here if not redirected</a>
        </body>
        </html>
    `);
});


module.exports = router;
