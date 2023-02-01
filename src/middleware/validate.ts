import { Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';

const Validate =
  (schema: AnyZodObject) => (req: Request, res: Response, next: Function) => {
    try {
      schema.parse({
        body: req.body,
        headers: req.headers,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e) {
      const zodError = e as ZodError;
      return res.status(404).json({
        message: zodError.errors[0].message,
      });
    }
  };

export default Validate;
