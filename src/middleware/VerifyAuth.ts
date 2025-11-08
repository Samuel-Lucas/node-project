import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function verifyAuth(request: Request, response: Response, next: NextFunction) {
    
    const authToken = request.headers.authorization

    if (authToken) {
        const [, token] = authToken.split(' ')

        try {
            const { sub } = jwt.verify(token!, '123456789')
            console.log('Token for user', sub)
            return next()
        } catch (error) {
            return response.status(401).json({ message: 'Unauthorized' })
        }
    }

    return response.status(401).json({ message: 'Unauthorized' })
}