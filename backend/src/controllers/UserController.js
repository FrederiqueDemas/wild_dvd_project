const models = require("../models");
const { hashPassword } = require("../helpers/argonHelper");

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const modify = (req, res) => {
  const newUser = req.body;

  models.user
    .update(newUser, req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) throw new Error("no change affected");
      res.status(201).send({ ...newUser });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const newUser = req.body;

  hashPassword(newUser.password).then((hash) => {
    delete newUser.password;

    models.user
      .insert({ ...newUser, password_hash: hash })
      .then(([result]) => {
        res.status(201).send({ ...newUser, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  modify,
  add,
  destroy,
};
