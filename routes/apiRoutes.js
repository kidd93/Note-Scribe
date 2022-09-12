const { writeFile } = require('fs');
let store = require('../db/db.json');
const { v1: uuidv1 } = require('uuid');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.json(store);
});

// creates an Id variable in the body
router.post('/notes', ({body},res)=> {
    body.id = uuidv1();
    store.push(body);

    console.log('Store: ',store);
    writeFile('./db/db.json', JSON.stringify(store), err=>{
        if(err){console.log(err)};
        res.json(store);
    });

})

// delete function isn't a factor yet
router.delete('/notes/:id', ({body}, res) => {
    getStore()
    .removeId({id})
    .then(() => res.json({ok: true}))
    })
    // console.log(err)

module.exports = router;