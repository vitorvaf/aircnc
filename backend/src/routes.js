const express = require('express');
const multer = require('multer');
const uplaodConfig = require('./config/upload');


const SessionController = require('./controllers/SessionContoller');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardContoller');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uplaodConfig);


routes.post('/sessions' ,SessionController.store);

routes.get('/spots', SpotController.index );

routes.post('/spots', upload.single('thumbnail'), SpotController.store );

routes.get('/dashboard' , DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);



// req.query => Acessar os  query params (para usar em filtros)
// req.params => Acessar os route params (para edição, delete)
// req.body =>  Acessar corpo do requisição
// Ex: 

// routes.get('/', (req, res) => {
//     return res.json({message : "Hello Mundo"});

// });

// routes.post('/users' , (req, res) => {
//     return res.json({idade: req.query.idade})
// });

// routes.put('/users/:id', (req, res) => {
//     return res.json({id: req.params.id});
// });


module.exports = routes;
