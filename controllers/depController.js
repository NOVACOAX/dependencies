const path = require('path');

const dep_index = (req, res) => {
    const dep = [
        {title: 'Bootstrap 5.0.2 CSS', link: 'http://localhost:3200/dep/bootstrap-5.0.2/css'},
        {title: 'Bootstrap 5.0.2 JS', link: 'http://localhost:3200/dep/bootstrap-5.0.2/js'},
        {title: 'Bootstrap 5.0.2 CSS-min', link: 'http://localhost:3200/dep/bootstrap-5.0.2/css.min'},
        {title: 'Bootstrap 5.0.2 JS-min', link: 'http://localhost:3200/dep/bootstrap-5.0.2/js.min'},
        {title: 'jQuery  3.6.1 min', link: 'http://localhost:3200/dep/jquery'},
        {title: 'Font awesome  4.7.0 min', link: 'http://localhost:3200/dep/font-awesome'},
        {title: 'Boxicons 2.1.4', link: 'http://localhost:3200/dep/boxicons'},
        {title: 'CSS animations', link: 'http://localhost:3200/dep/animate'},
    ];
    res.render('index', { title: 'All dependenices', deps: dep });
};
const dep_BS5_css = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/local_dep/bootstrap-5.0.2-dist/css/bootstrap.css"));
};
const dep_BS5_js = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/local_dep/bootstrap-5.0.2-dist/js/bootstrap.bundle.js"));
};
const dep_BS5_css_min = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/local_dep/bootstrap-5.0.2-dist/css/bootstrap.css"));
};
const dep_BS5_js_min = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/local_dep/bootstrap-5.0.2-dist/js/bootstrap.bundle.js"));
};
const dep_jquery = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/local_dep/jquery-3-6-1.min.js"));
};
const dep_animate = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/local_dep/animate.min.css"));
};
const dep_boxicons = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/local_dep/boxicons-2.1.4/css/boxicons.min.css"));
};
const dep_font_awesome = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/local_dep/font-awesome-4.7.0/css/font-awesome.min.css"));
};



module.exports = {
    dep_index,
    dep_BS5_css,
    dep_BS5_js,
    dep_BS5_css_min,
    dep_BS5_js_min,
    dep_jquery,
    dep_animate,
    dep_boxicons,
    dep_font_awesome,
}