const Movies = require('../models/Movies');

module.exports = {
    create: (req, res) => {
      const { name, duration, schedule, poster, rating, language } = req.body;
      const movie = new Movies({
        name,
        duration,
        schedule,
        poster,
        rating,
        language,
      });
        movie
          .save()
          .then((resp) => res.status(201).json(resp))
          .catch((err) => res.status(400).json({success: false, error: err}));
    
    },
    
    list: (req, res) => {
      const page = parseInt(req.query.page) || 1
      const limit = parseInt(req.query.limit) || 3
      const startIndex = (page - 1) * limit

      Movies.find().limit(limit).skip(startIndex)
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json({success: false, error: err}));
    }, 
    
    destroy: (req, res) => {
      Movies.remove({ _id: req.params.id })
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json({success: false, error: err}));
    },
    
    show: (req, res) => {
      Movies.findById(req.params.id)
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json({success: false, error: err}));
    },
    
    update: (req, res) => {
      Movies.updateOne({ _id: req.params.id }, { $set: req.body })
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json({success: false, error: err}));
    },
}
