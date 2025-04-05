import express from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'
import { ENV_VARS } from '../config/envVar.js'

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies['jwt-chainOptimization']
        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized - No token provided!' })    
        }

        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET)

        const user = await User.findById(decoded.userId).select('-password')
        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found!' })
        }

        req.user = user
        next()
    } catch (err) {
        console.error('JWT Auth Error -->', err)
        return res.status(500).json({ success: false, message: 'Internal Server Error!' })
    }
}
