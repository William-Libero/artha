class baseController{
    static rotas(){
        return {
            home: '/',
            logout: '/logout'
        };
    }

    home(){
        return (req, resp) => {
            resp.redirect('/login')
        }
    }

    logout(){
        return (req, res) => {
            req.logout();
            res.redirect('/');
        }
    }
}

module.exports = baseController;