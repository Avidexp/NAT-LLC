const User = require("../models/user");
const Equipment = require("../models/equipment");

exports.fetchEquipment = function(req,res,next){
    Equipment.find()
    .then(function(equipment){
        res.send({payload: equipment});
    })
    .catch(function(err){
        console.log("Equipment Lookup Failed");
        res.send("Equipment Lookup Failed");
    })
}
exports.listEquipment = function(req, res, next) {
    const title = req.body.title;
    const serial = req.body.serial;
    const start = req.body.start;
    const end = req.body.end;
    const condition = req.body.condition;
    const desc = req.body.desc;
    const email = req.body.Email;
    console.log("List equipment controller initiated!");
    console.log(title);
    console.log(serial);
    console.log(start);
    console.log(end);
    console.log(condition);
    console.log(desc);


    User.findOne({ email: email }, function(err, existingUser) {
      if (err) {
        return next(err);
      }
      const UserId = existingUser._id;
      const equipment = new Equipment({
        userId: UserId,
        userEmail: email,
        title: title,
        serial: serial,
        start: start,
        end: end,
        condition:condition,
        desc: desc
      });
  
      equipment.save(function(err) {
        if (err) {
          return next(err);
        }
      });
  
      // If a user with email does NOT exist, create and save user record
  
      // Repond to request indicating the user was created
      console.log("Equipment Saved Succesfully");
    });
  };