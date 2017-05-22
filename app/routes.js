var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/fly-tip/', function (req, res) {
   
   var location = req.session.data['radio-group-location'];
   
   if (location == 'Veolia') {
       res.redirect('/fly-tip/fly-tip-or-sweeper-bags');
   }
   else if (location == 'idVerde') {
       res.redirect('/fly-tip/get-idVerde-info');
   } else {
       res.redirect('/fly-tip/signpost-elsewhere');
   }
});

module.exports = router
