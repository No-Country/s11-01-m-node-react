import { Request } from 'express'
import { Strategy } from 'passport-jwt'
import db from '../db/db.server'

const cookieExtractor = (req: Request): string | null => {
  let cookie = null
  if (req && req.cookies) {
    cookie = req.cookies.Authorization
  }
  return cookie
}

const opts = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.JWT_SECRET as string
}

const passportMiddleware = new Strategy(opts, async (payload, done) => {
  try {
    console.log(payload)
    const user = await db.user.findFirst({
      where: {
        email: payload.email
      } 
    })
    console.log(user)
    if (user !== null) return done(null, user)
    return done(null, false)
  } catch (error) {
    let errorMessage
    if (error instanceof Error) errorMessage = error.message
    return errorMessage
  }
})

export default passportMiddleware;
