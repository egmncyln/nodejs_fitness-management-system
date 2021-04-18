import { Router } from 'express';

const router = Router();

router.post('/login', (req, res, next) => {
    res.status(200).json(req.body);
});

export default router;