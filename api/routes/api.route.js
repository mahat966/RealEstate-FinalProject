const router = require("express").Router();
const authRouter = require("./../controllers/auth.controller");

const galleryRouter = require("../components/gallery/gallery.route");
const propertyRouter = require("../components/property/property.route");
const designItemRouter = require("../components/designItem/designItem.route");

const contactRouter = require("../components/contact/contact.route");

// load middleware
const authenticate = require("./../middlewares/authenticate");

router.use("/auth", authRouter);
router.use("/user", authenticate);

router.use("/gallery", galleryRouter(authenticate));
router.use("/property", propertyRouter(authenticate));

router.use("/designItem", designItemRouter(authenticate));

router.use("/contact", contactRouter(authenticate));

module.exports = router;
