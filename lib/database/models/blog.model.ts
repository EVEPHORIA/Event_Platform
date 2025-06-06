import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  imgSrc: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;