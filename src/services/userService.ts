import prisma from '../config/prisma';
import { User } from '../types/UserType';

export async function createUser(user: User) {
    return await prisma.user.create({
        data: user,
    });
};

export async function getUserByID(id: number) {
    return await prisma.user.findUnique({ where: { id } })
}