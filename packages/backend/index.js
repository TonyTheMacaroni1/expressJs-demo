const express =  require('express');
const cors = require('cors');
const app = express();
const port = 4567;

app.use(cors()); // This middleware allows the frontend to communicate with the backend
app.use(express.json()); // This middleware parses JSON bodies
app.post('/', (req, res) => {
    res.send('Welcome to my calculator backend!');
});

app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: parseInt(num1) + parseInt(num2) });
});

app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: parseInt(num1) - parseInt(num2) });
});

app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: parseInt(num1) * parseInt(num2) });
});

app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: parseInt(num1) * parseInt(num2) });
});

app.listen(port, () => {
    console.log(`Calculator app listening on port ${port}`);
});