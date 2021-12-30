const router = require("express").Router();
// Import all routes, api or otherwise
const apiRoutes = require("./api");

// use all imported routes here so they are available to the router
router.use("/api", apiRoutes);

module.exports = router;
