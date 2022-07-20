import 'reflect-metadata';
import 'express-async-errors'
import { createConnection } from "typeorm";
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { errors } from 'celebrate'
import AppError from './errors/AppErrors';
import routes from './routes';

const app = express()

app.use(cors())
app.use(express.json())

app.use(errors())

app.use(routes)

createConnection().then(async connection => {
    app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: "error",
                message: error.message
            })
        }
        return response.status(500).json({
            status: "error",
            message: error.message,
            details: error.stack,
            name: error.name
        })
    })

    app.listen(3333, () => {
        console.log("Server started on port 3333!")
    })
}).catch(error => console.log(error));