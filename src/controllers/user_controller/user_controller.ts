import type { Request } from 'express';
import console = require('node:console');
const userData = require('../../db/data/user.data.js');

function getUserData(request: Request) {
    return userData;
}

function getOneUser(request: Request) {
    const id = request.params.id;
    if (!id || isNaN(Number(id))) {
        throw new Error("Invalid 'id' parameter");
    }
    const data = userData.find((x: { [key: string]: any }) => x.id == id);
    return data;
}

module.exports = { getUserData, getOneUser };
