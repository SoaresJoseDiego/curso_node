const express = require('express')
const app = express()
const port = 3000


const exphbs = require('express-handlebars')

const hbs = exphbs.create({
    partialsDir: ['views/partials']
}) 

app.engine("handlebars", hbs.engine);

app.set('views', __dirname + '/views')

app.use(express.static('public'))

app.set('view engine', 'handlebars')


    const products = [
        {
            name: 'Mouse',
            describe: 'Mouse sem fio',
            price: 50,
            link: 'mouse'
            
        },
        {
            name: 'Teclado',
            describe: 'Teclado sem fio',
            price: 30,
            link: 'teclado'
        },
        {
            name: 'TV 43" DELL ',
            describe: 'TV 43 polegadas',
            price: 5000,
            link: 'tv'
        },

        
    ]

    app.get('/products', (req,res) => {
        res.render('products', {products: products})
    })


    app.get('/products/:productLink', (req, res) => {
        const productLink = req.params.productLink
        const product = products.find(p => p.link === productLink)
    
        if (product) {
            res.render(`partials/${productLink}`, { product: product })
        } else {
            res.status(404).send('Produto não encontrado')
        }
    })
    

app.get('/', (req, res) => {
    const client = {
        name: 'Diego',
        surname: 'Soares',
        date: '18/03/2025'
    };

    res.render('home', {client: client})
})



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    
})