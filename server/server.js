require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('cors')());

mongoose.connect(process.env.DATABASE, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

mongoose.connection.on('error', (err) => {
	console.log(err);
});

mongoose.connection.once('open', () => {
	console.log("Mongodb connected");
});
require(path.resolve(__dirname, "models", "user.model"));
require(path.resolve(__dirname, "models", "product.model"));
/******/
app.use('/user', require(path.resolve(__dirname, "routes", "user.route")));
app.use('/product', require(path.resolve(__dirname, "routes", "product.route")));

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

