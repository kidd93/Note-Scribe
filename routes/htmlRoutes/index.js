const path = require('path');
const router = require('express').router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

router.get('/db', (req, res) => {
    res.sendFile(path.join(__dirname, './notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

module.exports = router;