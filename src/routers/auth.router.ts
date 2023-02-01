import express from 'express';
import { Login, Register, getAllUsers } from '../controller/auth.control';
import Validate from '../middleware/validate';
import { LoginSchema, RegisterSchema } from '../zodSchema/auth.schema';

const router = express.Router();

router.post('/register', Validate(RegisterSchema), Register);
router.post('/login', Validate(LoginSchema), Login);
router.get('/users',getAllUsers)

export default router;
