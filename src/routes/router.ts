import { Router } from 'express';
import { customerCart } from '../controllers/customerCart';

const router: Router = Router({});

router.get('/customerCart', customerCart);

export { router };
