import { Router } from 'express';
import {
  blog_create_get,
  blog_update_get,
  blog_index,
  blog_create_post,
  blog_details,
  blog_delete,
  blog_update,
} from '../controllers/blogController';

const router = Router();

router.get('/create', blog_create_get);
router.get('/update/:id', blog_update_get);
router.get('/', blog_index);
router.post('/', blog_create_post);
router.get('/:id', blog_details);
router.delete('/:id', blog_delete);
router.post('/up/:id', blog_update);

export default router;
