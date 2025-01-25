import ConnectDb from '@/libs/mongodb';
import Article from '@/models/articles.model';
import { NextResponse } from 'next/server';

// Define the expected request body type
interface ArticleRequestBody {
  topic: string;
  article: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    // Parse the JSON body from the request
    const { topic, article }: ArticleRequestBody = await req.json();

    // Validate required fields
    if (!topic || !article) {
      return NextResponse.json(
        { message: 'Both topic and article are required' },
        { status: 400 }
      );
    }

    // Connect to the database
    await ConnectDb();

    // Create the article document
    await Article.create({ topic, article });

    // Return a success response
    return NextResponse.json({ message: 'Article Created' }, { status: 201 });
  } catch (error: unknown) {
    console.error('Error creating article:', error);

    // Return an error response
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { message: 'Internal Server Error', error: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Establish database connection
    await ConnectDb();
    const articlesAll = await Article.find();

    return NextResponse.json({ articles: articlesAll }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching articles:', error);
  }
}

export async function DELETE(req: Request): Promise<NextResponse> {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    // Connect to the database
    await ConnectDb();

    // Delete the article by ID
    const deletedArticle = await Article.findByIdAndDelete(id);

    // Handle cases where the article is not found
    if (!deletedArticle) {
      return NextResponse.json(
        { message: 'Article not found' },
        { status: 404 }
      );
    }

    // Return a success response
    return NextResponse.json({ message: 'Article Deleted' }, { status: 200 });
  } catch (error: unknown) {
    // Log the error for debugging
    console.error('Error deleting article:', error);

    // Return an error response
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { message: 'Internal Server Error', error: errorMessage },
      { status: 500 }
    );
  }
}
