/*  **********  REQUIREMENTS  **********  */
const router = require('express').Router();

// Routes
router.get('/', (req, res, next) => {
  console.log('main page');
  req.session.tempData = 'temp';
  console.log(`res.locals.sampleData: ${res.locals.sampleData}, req.session.tempData: ${req.session.tempData}`);
  res.send(`<h1>This is the main page.</h1>`);
});

router.get('/about', (req, res, next) => {
  console.log('about');
  console.log(`res.locals.sampleData: ${res.locals.sampleData}, req.session.tempData: ${req.session.tempData}`);
  res.send(`<h1>This is the about page.</h1>`);
});

router.get('/blog', (req, res, next) => {
  console.log('blog');
  console.log(`res.locals.sampleData: ${res.locals.sampleData}, req.session.tempData: ${req.session.tempData}`);
  res.send(`<h1>This is my first blog post.</h1>`);
}); 

router.get('/faqs', (req, res, next) => {
  console.log('faqs');
  console.log(`res.locals.sampleData: ${res.locals.sampleData}, req.session.tempData: ${req.session.tempData}`);
  res.send(`<h1>This is the faqs page.</h1>`);
});

/*  **********  EXPORTS **********  */
module.exports = router;
