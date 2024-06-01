import {z} from 'zod';
import { TranssactionType } from '../entities/transactions.entity';

export const createTransactionsSchema = {
    title: z.string(),
    amount: z.number().int().positive(),
    type: z.nativeEnum(TranssactionType),
    date: z.coerce.date(),
    categoryId: z.string().length(24),

};

const createTransactionObject  = z.object(createTransactionsSchema);
export type CreateTransactionDTO = z.infer<typeof createTransactionObject>;


export  const indexTransactionsSchema = {
    title: z.string().optional(),
    categoryId: z.string().length(24).optional(),
    beginDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
}

const indextransactionObject = z.object(indexTransactionsSchema)
export type IndexTransactionsDTO = z.infer<typeof indextransactionObject>


export const getDashBoardSchema = {

  beginDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),

}

const getDashBoardObject = z.object(getDashBoardSchema)
export type GetDashBoardDTO = z.infer<typeof getDashBoardObject>;