/* eslint-disable @typescript-eslint/no-explicit-any */
import ConnectDb from '@/libs/mongodb';
import Article from '@/models/articles.model';
import { NextResponse } from 'next/server';
import { Connection } from 'mongoose'; // Import mongoose for types

interface UpdateArticleBody {
  newTopic: string;
  newArticle: string;
}

let cachedDb: Connection | null = null; // Type the cachedDb as mongoose.Connection

// Utility function to handle MongoDB connection
async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb; // Reuse the existing connection
  }

  try {
    cachedDb = await ConnectDb(); // ConnectDb should return a Connection type
    return cachedDb;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to the database');
  }
}

export async function PUT(req: Request, { params }: any) {
  try {
    const { id } = params;

    // Validate the `id` parameter
    if (!id) {
      return NextResponse.json(
        { message: 'Article ID is required' },
        { status: 400 }
      );
    }

    // Parse and validate the request body
    const { newTopic: topic, newArticle: article }: UpdateArticleBody =
      await req.json();
    if (!topic || !article) {
      return NextResponse.json(
        { message: 'Both newTopic and newArticle are required' },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Update the article in the database
    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      { topic, article },
      { new: true }
    );

    // Handle cases where the article is not found
    if (!updatedArticle) {
      return NextResponse.json(
        { message: 'Article not found' },
        { status: 404 }
      );
    }

    // Return a success response
    return NextResponse.json(
      { message: 'Article Updated', updatedArticle },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Log the error for debugging
    console.error('Error updating article:', error);

    // Return an error response
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { message: 'Internal Server Error', error: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET(req: Request, { params }: any) {
  try {
    const { id } = params;

    // Validate the `id` parameter
    if (!id) {
      return NextResponse.json(
        { message: 'Article ID is required' },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Find the article by ID
    const article = await Article.findById(id);

    // Handle cases where the article is not found
    if (!article) {
      return NextResponse.json(
        { message: 'Article not found' },
        { status: 404 }
      );
    }

    // Return the found article
    return NextResponse.json({ article }, { status: 200 });
  } catch (error: unknown) {
    // Log the error for debugging
    console.error('Error fetching article:', error);

    // Return an error response
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { message: 'Internal Server Error', error: errorMessage },
      { status: 500 }
    );
  }
}
