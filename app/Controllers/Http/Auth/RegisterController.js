'use strict'

class AuthRegisterController {
    showRegisterForm ({}) {
        return DataView.render('auth.register')
    }
}

module.exports = AuthRegisterController

