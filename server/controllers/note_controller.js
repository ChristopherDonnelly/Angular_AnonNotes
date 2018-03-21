const mongoose = require('mongoose');
const Notes = mongoose.model('Notes');

module.exports = {
    findAll: (req, res) => {
        Notes.find({}, (err, notes) => {
            if(err){
                res.json({message: "Error", error: err});
            }else{
                res.json({message: "Success", notes: notes});
            }
        });
    },
    findOne: (req, res) => {
        console.log('Get Notes By Id: ' + req.params.id)
        Notes.findById({_id: req.params.id}, (err, note) => {
            if(err){
                res.json({message: "Error", error: err});
            }else{
                res.json({message: "Success", note: note});
            }
        });
    },
    update: (req, res) => {
        var query = {'_id': req.params.id};

        console.log('Attempting to update Note by Id: '+req.body.content);

        Notes.findByIdAndUpdate(query, { content: req.body.content }, {upsert: true, new: true, runValidators: true}, function(err, note){
            if(err) {
                console.log('Something went wrong, could not update Note: '+req.params.id);
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                console.log(author)
                res.json({message: "Success", note: note});
            }
        });
    },
    create: (req, res) => {
        console.log('Attempt Create new Note: ' + req.body.content)
        var note = new Notes({content: req.body.content});

        note.save((err) => {
            if(err) {
                console.log('Something went wrong while trying to create new note: ' + req.body);
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                console.log('Successfully created a new note: ' + req.body);
                res.json({message: "Success", note: note});
            }
        });
    },
    delete: (req, res) => {
        Notes.remove({ _id: req.params.id }, (err, note) => {
            if(err){
                console.log('Something went wrong, could not remove note: '+req.params.id);
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            }else{
                console.log('Successfully deleted a note!: '+req.params.id);
                res.json({message: "Success", note: note});
            }
        });
    }
} 