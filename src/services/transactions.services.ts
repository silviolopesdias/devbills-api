import { StatusCodes } from "http-status-codes";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { TransactionsRepository } from "../database/repositories/transactions.repository";
import { CreateTransactionDTO, IndexTransactionsDTO } from "../dtos/transactions.dto";
import { Transaction } from "../entities/transactions.entity";
import { AppError } from "../errors/app.error";

export class TransactionsService {
    constructor(private transactionsRepository: TransactionsRepository, private categoriesRepository: CategoriesRepository){}

    async create({date, amount, categoryId, type,title}: CreateTransactionDTO): Promise<Transaction>{
     
        const category = await  this.categoriesRepository.findById(categoryId);

        if(!category){
            throw new AppError('Category does not exists', StatusCodes.NOT_FOUND);

        }
         
        const transaction = new Transaction({
            title,
            date,
            amount,
            type,
            category,
        })

        const createdTransaction = await this.transactionsRepository.create(transaction);

        return createdTransaction;

    }

    async index(filters: IndexTransactionsDTO): Promise<Transaction[]>{
        const transactions = await this.transactionsRepository.index(filters);

        return transactions
    }
}