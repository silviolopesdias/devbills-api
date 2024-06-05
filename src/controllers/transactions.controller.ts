import { NextFunction, Request, Response } from "express";

import { StatusCodes } from "http-status-codes";
import { TransactionsService } from "../services/transactions.services";
import { CreateTransactionDTO, GetDashBoardDTO, GetFinancialEvolutionDTO, IndexTransactionsDTO } from "../dtos/transactions.dto";
import { BodyRequest, QueryRequest } from "./types";



export class TransactionsController {

    constructor(private transactionsService: TransactionsService) { }

    create = async (
        req: BodyRequest<CreateTransactionDTO>,
        res: Response,
        next: NextFunction
    ) => {

        try {

            const { title, amount, categoryId, date, type } = req.body;


            const result = await this.transactionsService.create({ title, amount, categoryId, date, type });

            return res.status(StatusCodes.CREATED).json(result)
        } catch (err) {
            next(err);
        }

    };
    index = async (
        req: QueryRequest<IndexTransactionsDTO>,
        res: Response,
        next: NextFunction
    ) => {

        try {

            const { categoryId, title, beginDate, endDate } = req.query
            const result = await this.transactionsService.index({ categoryId, title, beginDate, endDate });

            return res.status(StatusCodes.OK).json(result)
        } catch (err) {
            next(err);
        }
    }
        getDashBoard = async (
            req: QueryRequest<GetDashBoardDTO>,
            res: Response,
            next: NextFunction
        ) => {
    
            try {
    
                const {beginDate, endDate } = req.query
                const result = await this.transactionsService.getDashBoard({ beginDate, endDate });
    
                return res.status(StatusCodes.OK).json(result)
            } catch (err) {
                next(err);
            }

    }
    getFinancialEvolution = async (
        req: QueryRequest<GetFinancialEvolutionDTO>,
        res: Response,
        next: NextFunction
    ) => {

        try {

            const {year } = req.query
            const result = await this.transactionsService.getFinancialEvolution({ year });

            return res.status(StatusCodes.OK).json(result)
        } catch (err) {
            next(err);
        }

}

}