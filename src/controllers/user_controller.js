const userService = require('../services/user-service');
exports.loginUser = async (req, res) => {
    try {
        const user = await userService.login(req.body);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

exports.registerUser = async (req, res) => {
    try {
        const user = await userService.register(req.body);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

exports.profile = async (req, res) => {
    try {
        const user = await userService.getProfile(req.user.id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

