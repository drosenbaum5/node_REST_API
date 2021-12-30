const router = require("express").Router();
// import all api routes here
const testRoutes = require("./test");

// add more API routes here once more files have been created
// all routes are exported from this file
router.use("/test", testRoutes);

module.exports = router;
