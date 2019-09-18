import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                phone: Sequelize.STRING,
                address: Sequelize.STRING
            },
            {
                sequelize
            }
        );

        return this;
    }
}

export default User;