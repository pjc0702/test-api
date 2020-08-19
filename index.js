const express = require('express')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express()
    //const sequelize = new Sequelize('postgres://postgres:admin@mbmpru01.pronaca.com:30576/postgres')
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/postgres')
const cors = require('cors')
app.use(cors())

const router = express.Router();
app.use('/api', router);
const port = 8080

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
// Note: using `force: true` will drop the table if it already exists
User.sync({ force: true }) // Now the `users` table in the database corresponds to the model definition
router.get('/', (req, res) => res.json({ message: 'Hello World' }))
router.post('/createUser', jsonParser, async(req, res) => {
        try {
            console.log('data:', req.body)
            const newUser = new User(req.body)
            await newUser.save()
            res.json({ user: newUser }) // Returns the new user that is created in the database
        } catch (error) {
            console.error(error)
            res.end("error");
        }
    }) <<
    << << < HEAD
app.listen(port, () => console.log(`Ejecutando api en puerto ${port}`)) ===
    === =
    router.get('/user/:userId', async(req, res) => {
        const userId = req.params.userId
        try {
            const user = await User.findAll({
                where: {
                    id: userId
                }
            })
            res.json({ user })
        } catch (error) {
            console.error(error)
            res.end("error");
        }
    })
router.get('/users', async(req, res) => {
    const userId = req.params.userId
    try {
        const user = await User.findAll()
        res.json({ user })
    } catch (error) {
        console.error(error)
        res.end("error");
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) >>>
    >>> > version0 .0 .1