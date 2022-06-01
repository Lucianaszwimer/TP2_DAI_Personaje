import { Router } from 'express';
import { authService } from '../services/authService.js';

const router = Router();
const AuthService = new authService();

router.get('', async (req, res) => {
    
    const token= await  AuthService.getToken();
    console.log(token);
    return res.status(200).json(token);

});

export default router;