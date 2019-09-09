import * as Yup from 'yup';

import User from '../models/User';

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string()
                .required()
                .min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation failed' });
        }

        const userExists = await User.findOne({
            where: { email: req.body.email }
        });

        if (userExists) {
            return res.status(400).json({ error: 'User already exists.' });
        }

        const { id, name, email } = await User.create(req.body);

        return res.json({
            id,
            name,
            email
        });
    }

    async show(req, res) {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email']
        });

        return res.json(users);
    }

    async index(req, res) {
        const { id } = req.params;

        const user = await User.findOne({
            where: { id },
            attributes: ['id', 'name', 'email']
        });

        return res.json(user);
    }
}

export default new UserController();