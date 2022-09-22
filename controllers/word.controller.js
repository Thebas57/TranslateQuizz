const WordModel = require("../models/word.model");
const ObjectID = require("mongoose").Types.ObjectId;
const { wordAddErrors } = require("../utils/errors.utils");

//Mélange une array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate random number
    let j = Math.floor(Math.random() * (i + 1));

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

module.exports.wordSearch = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("Le mot n'existe pas : " + req.params.id);

  try {
    const arr = { noTranslate: [], translate: "", fr: "" };

    //On cherche le mot
    await WordModel.findById(req.params.id, (err, docs) => {
      if (err) res.status(400).send("Word not found : " + req.params.id);
      else {
        arr.translate = docs.translate;
        arr.fr = docs.noTranslate;
      }
    }).clone();

    //On crée un tableau de 4 mots dont 3 aléatoires et 1 correct
    await WordModel.aggregate(
      [{ $match: { language: "anglais" } }, { $sample: { size: 5 } }],
      (err, result) => {
        if (err) console.log(err);
        result.map((word) => {
          if (word.translate !== arr.translate)
            arr.noTranslate.push(word.translate);
        });
        arr.noTranslate.length = 3;
        // On ajoute la bonne traduction
        arr.noTranslate.push(arr.translate);
        // On mélange l'array
        shuffleArray(arr.noTranslate);

        return res.status(200).send(arr);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports.addWord = async (req, res) => {
  const { noTranslate, translate, language, user } = req.body;
  try {
    const word = await WordModel.create({
      noTranslate,
      translate,
      language,
      user,
    });
    res.status(201).json({ word: word._id });
  } catch (err) {
    const errors = wordAddErrors(err);
    res.status(200).send({ errors });
  }
};

// Fonction pour récupérer tous les mots
module.exports.getWords = async (req, res) => {
  try {
    const words = await WordModel.find();
    res.status(200).json({ words });
  } catch (err) {
    console.log(err);
  }
};

// Fonction pour modifier l'état d'apprentissage du mot
module.exports.switchWord = (req, res) => {
  // Si id pas connu dans la base
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("Word not found : " + req.params.id);

  try {
     WordModel.findByIdAndUpdate(
      req.params.id,
      [{$set:{isLearn:{$eq:[false,"$isLearn"]}}}],
      { new: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else console.log("Pb update word : " + err);
      }
    );
  } catch (err) {
    console.log(err);
  }
};
