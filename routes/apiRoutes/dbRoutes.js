const router = require('express').Router();
const retain = require('./db/retain');

router.get('/notes', (req, res) => {
    retain.getNotes().then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    retain.addNote(req.body).then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

router.delete('/notes/:id', (req, res) => {
    retain.removeNote(req.params.id).then(() => res.json({ ok: true}))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;