const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const RoomsController = require('./controllers/RoomsController')
const AgendasController = require('./controllers/AgendasController')
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
    
    app.get('/agendas', 
    AgendasController.index)
    app.get('/agendas/:agendaId', 
    AgendasController.show)
    app.put('/agendas/:agendaId', 
    AgendasController.put)
    app.post('/agendas', 
    AgendasController.post)
    
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
    app.delete('/agendas/:agendaId',
    AgendasController.delete),
    
    app.get('/histories',
    isAuthenticated,
    HistoriesController.index),
    app.post('/histories',
    isAuthenticated,
    HistoriesController.post)
    
}

