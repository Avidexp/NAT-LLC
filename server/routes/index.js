const Authentication = require('../controllers/authentication');
// const Itinerary = require('../controllers/itinerary');
// const Cities = require('../controllers/cities_lng_lat');
const profileController = require('../controllers/profileController');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get('/', requireAuth, function (req, res) {
    res.send({ message: 'Token is valid' })
  });
  app.post('/api/v1/signin', requireSignin, Authentication.signin);
  app.post('/api/v1/signup', Authentication.signup);
  app.post("/api/v1/listEquipment", profileController.listEquipment);
  app.post("/api/v1/fetchEquipment", profileController.fetchEquipment);
  
};
