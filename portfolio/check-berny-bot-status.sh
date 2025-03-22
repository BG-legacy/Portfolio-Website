#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

ROUTE_FILE="src/app/api/chat/route.ts"
MOCK_FILE="src/app/api/chat/mock-route.ts"
BACKUP_FILE="src/app/api/chat/route.ts.backup"

echo -e "${BLUE}=== BernyBot Status Check ====${NC}"

# Function to check the current mode
check_mode() {
  # Check if we have the necessary files
  if [ ! -f "$ROUTE_FILE" ]; then
    echo -e "${RED}Error: API route file $ROUTE_FILE not found!${NC}"
    return 1
  fi
  
  # Check if mock file exists
  if [ ! -f "$MOCK_FILE" ]; then
    echo -e "${RED}Warning: Mock implementation file $MOCK_FILE not found!${NC}"
    echo -e "Mock mode cannot be enabled until this file is created."
  fi
  
  # Check for backup file to determine if in mock mode
  if [ -f "$BACKUP_FILE" ]; then
    # Compare current route with mock to confirm
    if diff -q "$ROUTE_FILE" "$MOCK_FILE" >/dev/null; then
      echo -e "${YELLOW}Status: BernyBot is running in MOCK MODE${NC}"
      echo -e "• Using hardcoded responses (no OpenAI API calls)"
      echo -e "• Original implementation is backed up at $BACKUP_FILE"
      echo -e "• Switch back with: ${GREEN}./toggle-mock-berny-bot.sh original${NC}"
    else
      echo -e "${YELLOW}Status: BernyBot appears to be in REAL MODE, but a backup file exists${NC}"
      echo -e "• The current implementation doesn't match the mock file"
      echo -e "• A backup file exists at $BACKUP_FILE"
    fi
  else
    echo -e "${GREEN}Status: BernyBot is running in REAL MODE${NC}"
    echo -e "• Using OpenAI API for responses"
    echo -e "• Make sure your OPENAI_API_KEY is correctly set in .env"
    echo -e "• Switch to mock mode with: ${YELLOW}./toggle-mock-berny-bot.sh mock${NC}"
    
    # Check for OpenAI API key
    if grep -q "OPENAI_API_KEY" .env 2>/dev/null; then
      KEY=$(grep "OPENAI_API_KEY" .env | cut -d '=' -f2)
      if [[ -z "$KEY" || "$KEY" == "your_openai_api_key_here" || "$KEY" == "sk-example"* ]]; then
        echo -e "${RED}Warning: Your OpenAI API key appears to be invalid or not set properly.${NC}"
        echo -e "Please update your .env file with a valid API key or use mock mode."
      else
        echo -e "${GREEN}• OpenAI API key found in .env${NC}"
      fi
    else
      echo -e "${RED}Warning: No OpenAI API key found in .env!${NC}"
      echo -e "Please create/update your .env file with a valid API key or use mock mode."
    fi
  fi
  
  # Check if server is running
  if lsof -i :3000 >/dev/null 2>&1; then
    echo -e "${GREEN}• Server is running on port 3000${NC}"
    echo -e "• Access BernyBot at http://localhost:3000"
  else
    echo -e "${YELLOW}• Server is not running${NC}"
    echo -e "• Start with: ${GREEN}npm run dev${NC}"
  fi
}

# Run the status check
check_mode 