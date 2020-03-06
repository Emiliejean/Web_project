const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const RoomsController = require('./controllers/RoomsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')
const isAuthenticated = require('./policies/isAuthenticated')
module.exports = (app) => {
   app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
    app.post('/login', 
    AuthenticationController.login)
    app.get('/rooms', 
    RoomsController.index)
    app.get('/rooms/:roomId', 
    RoomsController.show)
    app.put('/rooms/:roomId', 
    RoomsController.put)
    app.post('/rooms', 
    RoomsController.post)
    app.get('/bookmarks',
    isAuthenticated,
    BookmarksController.index)
    app.post('/bookmarks',
    isAuthenticated,
    BookmarksController.post)
    app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.delete),
    app.delete('/rooms/:roomId',
    RoomsController.delete),
    app.get('/histories',
    isAuthenticated,
    HistoriesController.index),
    app.post('/histories',
    isAuthenticated,
    HistoriesController.post)
    
}

