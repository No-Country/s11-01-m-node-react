import { PrismaClient } from '@prisma/client';
import hashToken from '../utils/hash';
const db = new PrismaClient();


//Crear un token de actualización

async function addRefreshTokenToWhitelist({ jti, refreshToken, userId }: { jti: string; refreshToken: string; userId: number }): Promise<void> {
    await db.refreshToken.create({
        data: {
            id: jti,
            hashedToken: hashToken.hashPass(refreshToken),
            userId,
            expires: new Date()
        },
    });
}

//Encontrar token por id

async function findRefreshTokenById(id: string) {
    return await db.refreshToken.findUnique({
        where: {
            id,
        },
    });
}


//Borrado de Tokens después de su uso
async function deleteRefreshToken(id: string) {
    await db.refreshToken.update({
        where: {
            id,
        },
        data: {
            revoked: true
        }
    });
}

//Revocar un token 
async function revokeTokens(userId: number) {
    await db.refreshToken.updateMany({
        where: {
            userId
        },
        data: {
            revoked: true
        }
    });
}

export default {
    addRefreshTokenToWhitelist,
    findRefreshTokenById,
    deleteRefreshToken,
    revokeTokens

}