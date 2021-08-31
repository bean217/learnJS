// Middleware Functions -- AKA any function that interacts with the request and response objects
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} on ${Date()}`);
    next();
};

module.exports = logger;