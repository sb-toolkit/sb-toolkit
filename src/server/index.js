const express = require('express');
const os = require('os');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/files', (req, res) => {
	let files = fs.readdirSync(dir);
	res.send(JSON.stringify(files));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
