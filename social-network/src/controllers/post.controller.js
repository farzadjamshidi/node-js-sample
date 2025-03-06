import postService from '../services/post.service.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await postService.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getPostById = async (req, res) => {
    try {
        const post = await postService.findById(req.params.id);
        if (post == null) {
        return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getPostsByUserId = async (req, res) => {
    try {
        const posts = await postService.findByUserId(req.params.id);
        res.json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}