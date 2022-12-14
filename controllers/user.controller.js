const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

// getUser
module.exports.getUser = (req, res) => {
  // Si id pas connu dans la base
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("User not found : " + req.params.id);

  // findById
  UserModel.findById(req.params.id, (err, user) => {
    if (!err) res.send(user);
    else res.status(400).send("User not found : " + req.params.id);
  }).select("-password");
};

// Upload
module.exports.upload = (req, res) => {
  // Si id pas connu dans la base
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("User not found : " + req.params.id);

  UserModel.findByIdAndUpdate(
    req.params.id,
    {$set : {'pseudo': req.body.pseudo}},
    { new: true, upsert: true, setDefaultsOnInsert: true },
    (err, user) => {
      if (!err) res.send(user);
      else res.status(400).send("User not found : " + req.params.id);
    }
  );
};
