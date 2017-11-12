var express = require('express');
var router = express.Router();
var contactsController = require('../controllers').contacts;

//define the home api route

router.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Contacts API!',
}));

router.post('/contacts', contactsController.create);
router.get('/contacts', contactsController.list);
router.get('/contacts/:contactId', contactsController.retrieve);
router.put('/contacts/:contactId', contactsController.update);
router.delete('/contacts/:contactId', contactsController.destroy);

module.exports = router;