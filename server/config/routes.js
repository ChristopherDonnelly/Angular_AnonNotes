const note_ctrl = require('../controllers/note_controller');

var path = require('path');

module.exports = (app) => {

    app.get('/notes/:id', (req, res) => {
        note_ctrl.findOne(req, res);
    });

    app.get('/notes', (req, res) => {
        note_ctrl.findAll(req, res);
    });

    app.put('/notes/:id', (req, res) => {
        note_ctrl.update(req, res);
    });

    app.post('/notes', (req, res) => {
        note_ctrl.create(req, res);
    });

    app.delete('/notes/:id', (req, res) => {
        note_ctrl.delete(req, res);
    });
    
    app.all("*", (req,res,next) => {
    	res.sendFile(path.resolve("./client/dist/index.html"))
	});

}        