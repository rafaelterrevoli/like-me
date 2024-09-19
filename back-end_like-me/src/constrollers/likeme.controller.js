import { pool } from "../db.js";

const getAllPosts = async (req, res) => {
    const posts = (await pool.query(`SELECT * FROM posts ORDER BY id`)).rows;
    res.status(200).json({posts: posts.length > 0 ? posts : [], ok: true});
};

const addPost = async (req, res) => {
    const { titulo, img, descripcion } = req.body;
    const query = `INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, null) RETURNING *`;
    const result = (await pool.query(query, [titulo, img, descripcion])).rows[0];
    return res.status(201).json({ ok: true, result });
};

export const controller = {
  getAllPosts,
  addPost,
};
