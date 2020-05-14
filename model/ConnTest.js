const movies = require("../model/movies")

movies.find({}, (err, items) => {
    if (err) return next(err)
    console.log(items.length)

})
