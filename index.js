const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Home page server test');
})

app.listen(PORT, () => console.log('Listening on port: ' + PORT));