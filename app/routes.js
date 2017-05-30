var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.post('/dirty-location/', function (req, res) {
  var problem = req.session.data['radio-group-problem']

  if (problem == 'flyTip') {
    res.redirect('/graffiti-fly-posting/')
  } else if (problem == 'flyPosting') {
    res.redirect('/graffiti-fly-posting/')
  } else if (problem == 'flyTip') {
    res.redirect('/fly-tip/')
  } else if (problem == 'deadAnimal') {
    res.redirect('/dead-animal/')
  } else if (problem == 'biohazard') {
    res.redirect('/syringes/')
  } else if (problem == 'dogMess') {
    res.redirect('/dog-mess/')
  } else {
    res.redirect('/dirty-location/get-location')
  }
})


router.post('/dirty-location/get-location', function (req, res) {
  var location = req.session.data['radio-group-dirty-location']

  if (location == 'Veolia') {
    res.redirect('/dirty-location/get-veolia-cleaning-request-details')
  } else if (location == 'idVerde') {
    res.redirect('/dirty-location/get-idVerde-cleaning-request-details')
  } else if (location == 'notResponsible') {
    res.redirect('/dirty-location/signpost-cleaning-request-elsewhere')
  }
})


router.post('/fly-tip/', function (req, res) {
  var location = req.session.data['radio-group-location']

  if (location == 'Veolia') {
    res.redirect('/fly-tip/fly-tip-or-sweeper-bags')
  } else if (location == 'idVerde') {
    res.redirect('/fly-tip/get-idVerde-info')
  } else {
    res.redirect('/fly-tip/signpost-elsewhere')
  }
})

module.exports = router
