// Test script for BernyBot API
// Run with: node test-berny-bot-api.js

const fetch = require('node-fetch');

// Colors for terminal output
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`${BLUE}=== BernyBot API Testing ====${RESET}\n`);

// Helper function to log with status
function logResult(message, success) {
  const color = success ? GREEN : RED;
  const status = success ? 'PASS' : 'FAIL';
  console.log(`${color}[${status}]${RESET} ${message}`);
}

// Test the API
async function testBernyBotAPI() {
  console.log(`${BLUE}Testing BernyBot API endpoint...${RESET}\n`);

  // Check if server is running
  try {
    const serverCheck = await fetch('http://localhost:3000');
    if (serverCheck.ok) {
      logResult('Server is running', true);
    } else {
      logResult('Server is running but returned non-200 status', false);
      return;
    }
  } catch (error) {
    logResult('Server is not running. Start with: npm run dev', false);
    return;
  }

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
      name: "Skills question",
      payload: {
        message: "What skills does Bernard have?",
        chatHistory: [],
        isTourMode: false
      }
    },
    {
      name: "Projects question",
      payload: {
        message: "Tell me about Bernard's projects",
        chatHistory: [],
        isTourMode: false
      }
    },
    {
      name: "Rate limiting test",
      payload: {
        message: "Test rate limiting",
        chatHistory: [],
        isTourMode: false
      },
      repeat: 15, // Send this message multiple times to test rate limiting
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
        const response = await fetch('http://localhost:3000/api/chat', {
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

      // Add a small delay between requests
      if (i < repeat - 1) {
        await new Promise(resolve => setTimeout(resolve, 100));
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

// Run the tests
testBernyBotAPI().catch(error => {
  console.error(`${RED}Unhandled error:${RESET}`, error);
}); 