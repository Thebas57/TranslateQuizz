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
  const { noTranslate, translate, language } = req.body;
  try {
    const word = await WordModel.create({ noTranslate, translate, language });
    res.status(201).json({ word: word._id });
  } catch (err) {
    const errors = wordAddErrors(err);
    res.status(200).send({ errors });
  }
};
