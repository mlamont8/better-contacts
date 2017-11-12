const Contact = require('../models').Contacts;

module.exports = {
    // To create a new Contact
    create(req, res){
        return Contact
            .create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone
            })
            .then(contact => res.status(201).send(contact))
            .catch(error => res.status(400).send(error));
    },
    // To list current Contacts
    list(req, res) {
        return Contact
        .all()
        .then(contacts => res.status(200).send(contacts))
        .catch(error => res.status(400).send(error));
    },
    // To retrieve a single Contact
    retrieve(req, res) {
        return Contact
          .findById(req.params.contactId)
          .then(contact => {
            if (!contact) {
              return res.status(404).send({
                message: 'Contact Not Found',
              });
            }
            return res.status(200).send(contact);
          })
          .catch(error => res.status(400).send(error));
      },
      // Update a Contact
      update(req, res) {
        return Contact
          .findById(req.params.contactId)
          .then(contact => {
            if (!contact) {
              return res.status(404).send({
                message: 'Contact Not Found',
              });
            }
            return contact
              .update({
                firstName: req.body.firstName || contact.firstName,
                lastName: req.body.lastName || contact.lastName,
                phone: req.body.phone || contact.phone,
                email: req.body.email || contact.email,
              })
              .then(() => res.status(200).send(contact))  // Send back the updated contact.
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },
      //Delete a contact
      destroy(req, res) {
        return Contact
          .findById(req.params.contactId)
          .then(contact => {
            if (!contact) {
              return res.status(400).send({
                message: 'Contact Not Found',
              });
            }
            return contact
              .destroy()
              .then(() => res.status(200).send({ message: 'Todo deleted successfully.' }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      },
};