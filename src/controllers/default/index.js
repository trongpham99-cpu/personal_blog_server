const { OK } = require('../../core/handleSuccess.core')

class DefaultController {

    call = async (req, res, next) => {

        new OK({
            message: `Welcome to Blog Server APIs!`,
        }).send(res)

    }
}

module.exports = new DefaultController()