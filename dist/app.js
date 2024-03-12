import express from 'express';
import nunjucks from 'nunjucks';
import data from './todo.js';
import bodyParser from 'body-parser';
import { addTodo } from './handleActions.js';
const app = express();
// Set up Nunjucks as the template engine
const nunjucksConfig = nunjucks.configure('views', {
    autoescape: true,
    express: app,
});
app.use(express.static('dist'));
app.set('engine', nunjucksConfig);
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    console.log(data);
    res.render('index.njk', { data });
});
app.get('/click', (req, res) => {
    const itemId = req.query.id;
    const newArr = data.map((item) => {
        if (itemId == item.id)
            return Object.assign(Object.assign({}, item), { isComplete: !item.isComplete });
        else
            return item;
    });
    data.splice(0, data.length, ...newArr);
    res.status(200);
    res.redirect('/');
});
app.post('/add', (req, res) => {
    const descri = req.body.des;
    const itemTodo = { id: (data.length + 1).toString(), desc: req.body.des, isComplete: false };
    addTodo(itemTodo);
    //data.push({id:2, desc : descri, isComplete: false})
    res.redirect('/');
});
app.listen('3001', () => {
    console.log('server started');
});
