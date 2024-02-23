const express = require('express');
const app = express();


const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    
];


const getRandomEmoji = () => {
const index = Math.floor(Math.random() * emojis.length);
const emoji = emojis[index];
const options = [emoji.name];
while (options.length < 4) {

const otherIndex = Math.floor(Math.random() * emojis.length);
const otherName = emojis[otherIndex].name;

if (!options.includes(otherName)) {
options.push(otherName);
}
}

const shuffledOptions = options.sort(() => Math.random() - 0.5);
return { emoji: emoji.emoji, options: shuffledOptions };
};

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
const { emoji, options } = getRandomEmoji();
res.render('index', { emoji, options });
});

app.post('/guess', (req, res) => {

const { guess, name } = req.body;

});


app.listen(5000, () => {
console.log(`Server running on port 5000`);
});