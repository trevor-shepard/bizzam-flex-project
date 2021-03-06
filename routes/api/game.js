const express = require("express");
const router = express.Router();
const passport = require('passport');
const Game = require('../../models/Game');
const validateGameInput = require('../../validation/game')



function genPin() {
    min = Math.ceil(1000);
    max = Math.floor(9999);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        return new Promise(async (resolve, reject) => {
            try {
                const { isValid, errors } = validateGameInput(req.body)
                if (!isValid) {
                    resolve(res.status(400).json(errors))
                }

                let pin = genPin()

                let games = await Game.find({pin: pin})

                while (games.length) {
                    pin = genPin()
                    games = await Game.find({pin: pin})
                }

                const newGame = new Game(req.body)

                newGame.pin = pin;
                newGame.creatorID = req.body.creator_id;

                await newGame.save()

                resolve(res.json(newGame))
            } catch(err) {
                resolve(res.status(400).json(err))
            }
        })
    }
)

router.get('/user',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        let games = await Game.find({creatorID: req.user.id})
        let result = games.reduce((acc, game) => {
            acc[game.id] = game
            return acc
        },
        {}) 
        return (res.json(result))
    }
)





module.exports = router;