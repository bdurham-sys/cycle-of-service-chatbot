import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { CYCLE_OF_SERVICE_FRAMEWORK } from '@/lib/framework';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, fileContent, fileName } = await request.json();

    const systemPrompt = `You are an expert in creating Cycles of Service SOPs for Apprenti, a nonprofit apprenticeship organization. 

${CYCLE_OF_SERVICE_FRAMEWORK}

Your role is to:
1. Analyze uploaded documents for gaps in the Cycle of Service
2. Identify where WOW moments and Measurable Actions should be added
3. Provide specific, actionable suggestions
4. Generate complete Cycles of Service that follow the template
5. Ensure every customer touchpoint is documented
6. Highlight areas that need improvement

When analyzing documents, look for:
- Missing touchpoints in the customer journey
- Unclear or missing WOW moments
- Lack of measurable actions
- Gaps in the service flow
- Opportunities to exceed expectations

When generating SOPs, use the exact format from the framework with clear visual distinction for WOW moments (✨) and Measurable Actions (📊).`;

    let userMessage = message;
    if (fileContent && fileName) {
      userMessage = `I've uploaded a document: "${fileName}"

Document Content:
${fileContent}

${message}`;
    }

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: userMessage,
        },
      ],
    });

    const textContent = response.content.find((block) => block.type === 'text');
    const responseText = textContent && 'text' in textContent ? textContent.text : '';

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error('Error processing chat:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
