import { Router } from "express";

import { ParamsType, validator } from "../middlewares/validator.middleware";
import { createTransactionsSchema } from "../dtos/transactions.dto";
import { TransactionsController } from "../controllers/transactions.controller";
import { TransactionFactory } from "../factories/transactions.factory";




export const transactionsRoutes = Router();

const controller = new TransactionsController(TransactionFactory.getServiceInstance());



transactionsRoutes.post('/', validator({
    schema: createTransactionsSchema,
    type: ParamsType.BODY,
}), controller.create)
transactionsRoutes.get('/', controller.index)