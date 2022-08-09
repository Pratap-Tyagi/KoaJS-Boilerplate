'use strict';

const YourController	 		 = 		require('../controllers/YourController')
const cTypeJSON					 =		require('../middlewares/cTypeJSON')
const cTypeMultiPart 			 =		require('../middlewares/cTypeMultiPart')

module.exports = function(app, Router){

	const router = new Router({ prefix: '/something/v1' });

	router.post('/yourApi', cTypeJSON, YourController.yourApi);
	app.use(router.routes()).use(router.allowedMethods());
};