import { NextRequest, NextResponse } from 'next/server';
import { analyzeWasteImage } from '@/lib/ai-service';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { image, sample_id } = body;

    if (!image && !sample_id) {
      return NextResponse.json(
        {
          error: 'Please upload an image or select a sample waste item to analyze.',
        },
        { status: 400 }
      );
    }

    // Protect against payloads > 12MB
    if (image && image.length > 15 * 1024 * 1024) {
      return NextResponse.json(
        {
          error: 'Image file size is too large. Please upload an image under 10MB.',
        },
        { status: 413 }
      );
    }

    const result = await analyzeWasteImage({
      imageBase64: image,
      sampleId: sample_id,
    });

    return NextResponse.json({
      success: true,
      data: result,
      ai_mode: result.is_demo ? 'demo' : 'connected',
    });
  } catch (error: any) {
    console.error('API /api/analyze error:', error);
    return NextResponse.json(
      {
        error: 'We could not analyze this image. Please try another clear photo of the waste item.',
      },
      { status: 500 }
    );
  }
}
