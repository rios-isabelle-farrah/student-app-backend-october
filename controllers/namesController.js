const express = require('express')
const controller = express.Router()

const repeatNTimesWithSpace = require('../utils/stringUtils');

controller.get('/:name/:times', (request, response) =>{
    try{
        const name = request.params.name

        const times = request.params.times
        
        const repeatedNames = repeatNTimesWithSpace(name, times);

        response.send(repeatedNames)

    }catch(err){
        response.send("There was an error.")
    }
})

module.exports = controller