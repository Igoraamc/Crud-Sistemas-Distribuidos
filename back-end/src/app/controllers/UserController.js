import * as Yup from 'yup';

import User from '../models/User';

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            phone: Yup.string()
                .required(),
            address: Yup.string().required(),
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

        const { id, name, email, phone, address } = await User.create(req.body);

        return res.json({
            id,
            name,
            email,
            phone,
            address
        });
    }

    async show(req, res) {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email', 'phone', 'address']
        });

        return res.json(users);
    }

    async index(req, res) {
        const { id } = req.params;

        const user = await User.findOne({
            where: { id },
            attributes: ['id', 'name', 'email', 'phone', 'address']
        });

        if (!user) {
            return res.status(400).json({ error: 'User does not exists' });
        }

        return res.json(user);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string(),
            phone: Yup.string(),
            address: Yup.string(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation failed' });
        }

        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(400).json({ error: 'User does not exists' });
        }

        if (req.body.email && req.body.email != user.email) {
            const emailExists = await User.findOne({
                where: { email: req.body.email }
            })

            if (emailExists) {
                return res.status(400).json({ error: 'This email is already in use' });
            }
        }

        const updatedUser = await user.update(req.body);

        return res.json(updatedUser);
    }

    async delete(req, res) {
        const { id } = req.params;

        await User.findByPk(id).then(user => {
            if (user) {
                user.destroy()
            } else {
                return res.status(400).json({ error: 'User does not exists' });
            }
        });

        res.json({ message: 'User deleted' });
    }
}

export default new UserController();