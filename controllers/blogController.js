import Blog from '../models/blog';

export const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const blog_create_get = (req, res) => {
  res.render('create', { title: 'Create a new blog' });
};

export const blog_update = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndUpdate(id, req.body, {
    new: true,
  })
    .then((result) => {
      res.redirect('/blogs');
    })
    .catch((err) => {
      console.log(err);
    });
  console.log('updated');
};

export const blog_update_get = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  console.log(blog);
  res.render('update', { blog, title: 'Create a new blog' });
};

export const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect('/blogs');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/blogs' });
    })
    .catch((err) => {
      console.log(err);
    });
};
