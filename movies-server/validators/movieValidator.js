
const { check, validationResult } = require('express-validator');

 const movieValidatorCatch = (req, res, next)  => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, error: errors.array() });
    }
    next();
}
exports.movieValidator = [
    check(['name','duration','schedule','poster', 'rating','language' ])
    .not()
    .isEmpty(),

    check('duration')
    .isInt()
    .withMessage('Value not Valid. The duration must be expressed in minutes'),

    check('rating')
    .isFloat({ min: 0, max: 10 }),
    check('language')
     .custom((value) => ['spanish', 'portuguese', 'english'].includes(value.toLowerCase()))
     .withMessage('Language not valid. Available Languages [spanish, portuguese, english]'),

    movieValidatorCatch
]
