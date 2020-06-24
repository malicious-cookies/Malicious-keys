function isLoggedIn(req, res, next) {
  if (req.user)
    // if user is authenticated in the session, carry on
    return next()
  res.redirect('/lol') // if they aren't redirect them to the home page
}

function isAdmin(req, res, next) {
  if (req.user.isAdmin)
    // if user is authenticated in the session, carry on
    return next()
  res.redirect('/') // if they aren't redirect them to the home page
}

function isSelfOrAdmin(req, res, next) {
  if (req.user.id == req.params.userId || req.user.isAdmin)
    // if user is authenticated in the session, carry on
    return next()
  res.redirect('/lol') // if they aren't redirect them to the home page
}

module.exports = {
  isLoggedIn,
  isAdmin,
  isSelfOrAdmin
}
