# BernyBot

BernyBot is a Star Wars-themed AI assistant integrated into Bernard Ginn Jr.'s portfolio website. It serves as an interactive guide to help visitors navigate the portfolio and learn more about Bernard's skills, experience, and projects.

## Features

- **AI-Powered Responses**: Uses OpenAI's GPT models to generate contextually relevant responses
- **Tour Mode**: Provides guided explanations for each section of the portfolio
- **Rate Limiting**: Prevents abuse with a simple in-memory rate limiting system
- **Mock Mode**: Allows testing without using OpenAI API credits

## Testing BernyBot

### Prerequisites

- Node.js and npm installed
- Portfolio project cloned and dependencies installed

### Setting Up

1. Clone the repository (if you haven't already)
2. Install dependencies:
   ```
   cd portfolio
   npm install
   ```
3. Configure the OpenAI API key in `.env`:
   ```
   OPENAI_API_KEY=your_key_here
   ```

### Running in Mock Mode (No API Key Required)

If you don't have a valid OpenAI API key or want to test without using API credits:

1. Enable mock mode:
   ```
   ./toggle-mock-berny-bot.sh mock
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Open http://localhost:3000 in your browser

To switch back to the real implementation:
```
./toggle-mock-berny-bot.sh original
```

### Testing Guide

Run the testing guide script for detailed instructions:
```
./test-berny-bot.sh
```

### Automated API Testing

Test the API endpoints directly:
```
node test-berny-bot-api.js
```

This script tests:
- Basic responses
- Tour mode functionality
- Keyword-based responses
- Rate limiting

## How BernyBot Works

### Components

1. **Frontend Component (`BernyBot.tsx`)**:
   - Provides the chat interface
   - Handles user interactions
   - Manages tour mode state
   - Communicates with the API

2. **API Route (`/api/chat/route.ts`)**:
   - Processes incoming messages
   - Enforces rate limiting
   - Communicates with OpenAI API
   - Returns formatted responses

3. **Logic Module (`BernyBotLogic.ts`)**:
   - Manages tour mode state
   - Tracks visited sections
   - Defines portfolio sections

### Tour Mode

When tour mode is active, BernyBot:
1. Detects which section of the portfolio is currently visible
2. Automatically provides contextual information about that section
3. Uses a more concise response format (via GPT-3.5-Turbo in real mode)

### Mock Mode

The mock implementation provides hardcoded responses based on:
- Keywords in the user's message
- The current section in tour mode

This allows for testing without an OpenAI API key.

## API Documentation

### POST /api/chat

Sends a message to BernyBot and receives a response.

**Request Body:**
```json
{
  "message": "What skills does Bernard have?",
  "chatHistory": [
    { "type": "user", "text": "Hello" },
    { "type": "bot", "text": "Hi there! How can I help?" }
  ],
  "isTourMode": false,
  "sectionInfo": {
    "id": "skills",
    "name": "Skills",
    "description": "Technical skills section"
  }
}
```

**Response:**
```json
{
  "response": "Bernard has extensive skills in full-stack development..."
}
```

**Rate Limiting:**
- 10 requests per minute per IP address
- Returns 429 status code when limit is exceeded 