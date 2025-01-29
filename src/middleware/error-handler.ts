import express, { Request, Response, NextFunction } from 'express';

// Error Handling Middleware
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction)=>{
    if (err.status) {
        return res.status(err.status).json({ error: err.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
};