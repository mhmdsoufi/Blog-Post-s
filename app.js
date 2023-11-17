import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import mongoose from 'mongoose';
import blogRoutes from './routes/blogRoutes';

//
const __filename = fileURLToPath(import.meta.url);

//
const __dirname = path.dirname(__filename);

// express app
const app = express();

//
const dbURI =
  'mongodb+srv://<replace with your username>:<replace with your password>@blog-1.d5ly3q0.mongodb.net/';
mongoose
  .connect(dbURI)
  .then((res) => app.listen(3000))
  .catch((err) => console.log(err));

// listen for requests
// app.listen(3000);

// register view engine
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//
// middleware & static files
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

//
app.use(express.urlencoded({ extended: true }));
//
app.use(morgan('dev'));

//
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
