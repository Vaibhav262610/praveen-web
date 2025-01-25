import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    article: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Article =
  mongoose.models.Article || mongoose.model('Article', articleSchema);

export default Article;
