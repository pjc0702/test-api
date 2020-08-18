const express = require('express')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/postgres')
const app = express()

const test = 'test'

const cors = require('cors')
app.use(cors())

const port = 8081
app.use(express.json());


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {});
User.sync({ force: true })
app.get('/', (req, res) => res.json({ message: 'test api' }))
app.post('/createUser', async(req, res) => {
    try {
        console.log('data:', req.body)
        const newUser = new User(req.body)
        await newUser.save()
        res.json({ user: newUser }) // Returns the new user that is created in the database
    } catch (error) {
        console.error(error)
        res.end("error");
    }
})
app.listen(port, () => console.log(`Ejecutando api en puerto ${port}`))