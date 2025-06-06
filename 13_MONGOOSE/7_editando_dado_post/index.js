const express = require('express');
const exphbs = require('express-handlebars');


const app = express();
const conn = require('./db/conn');


const hbs = exphbs.create({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const productsRoutes = require('./routes/productsRoutes');



app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({
        extended: true
    })
)


app.use(express.json());

app.use(express.static('public'));

app.use('/products', productsRoutes);

app.listen(3000);