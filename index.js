const exp = require('constants')
const path = require('path')

const express = require('express')
const App = express()


App.set('view engine', 'ejs')

App.set('views', path.join(__dirname, 'views'))
App.use(express.static(path.join(__dirname, 'public')))

App.get('/', (req, res) => {
    res.render('index')
})

App.get('/sobre', (req, res) => {
    res.render('sobre')
})

const port = process.env.port || 8080
App.listen(port, () => console.log(`server running on port ${port}`))