const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

// Configure Nunjucks
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.use(express.static(__dirname + '/public'));
// Set the view engine to use Nunjucks
app.set('view engine', 'njk');

// Define routes
app.get('/', (req, res) => {
    res.render('index', { title: 'My Express App', message: 'Hello, Nunjucks!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
