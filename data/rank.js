import SQ from 'sequelize';
import { sequelize } from '../db/database.js';

const Datatypes = SQ.DataTypes;

const Rank = sequelize.define('rank', {
    id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    score: {
        type: Datatypes.DOUBLE,
        allowNull: false,
    },
    createdAt: {
        type: Datatypes.DATE,
        allowNull: false,
    },
},
{timestamps: false,}
);
export async function getAll() {
    return Rank.findAll({
        order: [['score', 'DESC']],
    })
}

export async function getById(id) {
    return Rank.findAll({
        where: {id},
    })
}

export async function create(name, score) {
    const newRank = {name, score, createdAt: new Date()}
    return Rank.create(newRank).then(data => data.dataValues);
}