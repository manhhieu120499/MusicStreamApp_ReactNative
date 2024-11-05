const musicRouter = require('./music');
const accountRouter = require('./account');

function route(app) {
	app.use('/home', (req, res) => {
		res.send('Hello anh em f8');
	});
	app.use('/songs', musicRouter);
	app.use('/account', accountRouter);
}

module.exports = route;
