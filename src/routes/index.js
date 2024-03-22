import {Router} from "express"

const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'Pocah Store'}))

router.get('/about', (req, res) => res.render('about', {title: 'About'}))

router.get('/products', (req, res) => res.render('products', {title: 'Products'}))


export default router;