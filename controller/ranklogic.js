import * as rankRepository from '../data/rank.js';

export async function getRanks(req, res, next) {
    const ranks = await rankRepository.getAll();
    ranks 
    ? res.status(200).json(ranks)
    : res.sendStatus(404); 
}

export async function createRank(req, res, next) {
    const {name, score} = req.body;
    const newRank = await rankRepository.create(name, score);
    newRank
    ? res.status(201).json(newRank)
    : res.sendStatus(404);
}

export async function deleteRank(req, res, next) {
    const {id} = req.body;
    const deleteRank = await rankRepository.getById(id);
    console.log(deleteRank); 
    if (!deleteRank) {
        return res.sendStatus(404);
    }
    rankRepository.remove(id)
    res.sendStatus(204);
}