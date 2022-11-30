const express = require('express');

const dep_controller = require('../controllers/depController');

// * Express router
const router = express.Router();

// * Dependency routes
router.get('/', dep_controller.dep_index);
router.get('/bootstrap-5.0.2/css', dep_controller.dep_BS5_css);
router.get('/bootstrap-5.0.2/js', dep_controller.dep_BS5_js);
router.get('/bootstrap-5.0.2/css.min', dep_controller.dep_BS5_css_min);
router.get('/bootstrap-5.0.2/js.min', dep_controller.dep_BS5_js_min);
router.get('/jquery', dep_controller.dep_jquery);
router.get('/font-awesome', dep_controller.dep_font_awesome);
router.get('/animate', dep_controller.dep_animate);
router.get('/boxicons', dep_controller.dep_boxicons);



module.exports = router;
