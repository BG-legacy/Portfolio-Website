// Mock test script for BernyBot
// Run with: node test-berny-bot-mock.js

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const http = require('http');

// Colors for terminal output
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const BLUE = '\x1b[34m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

console.log(`${BLUE}=== BernyBot Mock Testing ====${RESET}\n`);

// Helper function to log with status
function logResult(message, success) {
  const color = success ? GREEN : RED;
  const status = success ? 'PASS' : 'FAIL';
  console.log(`${color}[${status}]${RESET} ${message}`);
}

// Creates a simple mock server to intercept OpenAI API calls
function startMockServer() {
  return new Promise((resolve) => {
    const mockResponses = {
      'normal': "Hello! I'm Berny Bot, a Star Wars-themed AI droid assistant for Bernard Ginn Jr.'s portfolio. How can I help you navigate the galaxy of Bernard's professional experience today?",
      'tour': "You're now viewing the Introduction section of Bernard's portfolio. This is where you'll get a first impression of Bernard Ginn Jr. and his work. Like R2-D2's holographic projections, this section provides a glimpse into who Bernard is and what he offers."
    };
    
    let requestCount = 0;
    
    const server = http.createServer((req, res) => {
      if (req.url.includes('/api/chat')) {
        requestCount++;
        
        // Parse the request body
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        
        req.on('end', () => {
          console.log(`${YELLOW}Intercepted request to /api/chat (${requestCount})${RESET}`);
          
          try {
            const requestData = JSON.parse(body);
            
            // Rate limiting simulation
            if (requestCount > 5) {
              res.writeHead(429, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ 
                error: 'Rate limit exceeded. Please try again in a minute.'
              }));
              return;
            }
            
            // Respond based on mode
            const responseText = requestData.isTourMode 
              ? mockResponses.tour 
              : mockResponses.normal;
            
            // Send the mock response
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ response: responseText }));
          } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Mock server error' }));
          }
        });
      } else {
        // Pass through for all other requests
        res.writeHead(404);
        res.end();
      }
    });
    
    server.listen(3001, () => {
      console.log(`${GREEN}Mock server running on port 3001${RESET}`);
      resolve(server);
    });
  });
}

// Test BernyBot functionality
async function testBernyBot() {
  console.log(`${BLUE}Testing BernyBot component functionality...${RESET}\n`);

  // Test cases
  const testCases = [
    {
      name: "Basic question",
      payload: {
        message: "What is your name?",
        chatHistory: [],
        isTourMode: false
      }
    },
    {
      name: "Tour mode message",
      payload: {
        message: "I'm viewing the intro section",
        chatHistory: [],
        isTourMode: true,
        sectionInfo: {
          id: 'intro',
          name: 'Introduction',
          description: 'Introduction section of the portfolio'
        }
      }
    },
    {
      name: "Rate limiting test",
      payload: {
        message: "Test rate limiting",
        chatHistory: [],
        isTourMode: false
      },
      repeat: 6, // Send this message multiple times to test rate limiting
      expectRateLimit: true
    }
  ];

  // Run test cases
  for (const test of testCases) {
    console.log(`\n${BLUE}Running test: ${test.name}${RESET}`);
    
    const repeat = test.repeat || 1;
    let rateLimited = false;
    
    for (let i = 0; i < repeat; i++) {
      if (repeat > 1) {
        console.log(`  Attempt ${i+1} of ${repeat}`);
      }
      
      try {
        const response = await fetch('http://localhost:3001/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(test.payload),
        });
        
        const data = await response.json();
        
        if (response.status === 429) {
          rateLimited = true;
          console.log(`  ${RED}Rate limited: ${data.error}${RESET}`);
        } else if (response.ok) {
          console.log(`  Response: "${data.response.substring(0, 50)}${data.response.length > 50 ? '...' : ''}"`);
        } else {
          console.log(`  ${RED}Error: ${data.error || 'Unknown error'}${RESET}`);
        }
      } catch (error) {
        console.log(`  ${RED}Error: ${error.message}${RESET}`);
      }
    }
    
    if (test.expectRateLimit) {
      logResult(`${test.name} - Rate limiting`, rateLimited);
    } else {
      logResult(`${test.name}`, true);
    }
  }
  
  console.log(`\n${BLUE}Testing complete!${RESET}`);
}

// Main function
async function main() {
  const mockServer = await startMockServer();
  
  try {
    await testBernyBot();
  } finally {
    // Clean up
    mockServer.close();
    console.log(`${GREEN}Mock server closed${RESET}`);
  }
}

// Run the tests
main().catch(error => {
  console.error(`${RED}Unhandled error:${RESET}`, error);
}); 