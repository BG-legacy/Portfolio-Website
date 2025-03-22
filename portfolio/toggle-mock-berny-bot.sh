#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

ROUTE_FILE="src/app/api/chat/route.ts"
MOCK_FILE="src/app/api/chat/mock-route.ts"
BACKUP_FILE="src/app/api/chat/route.ts.backup"

echo -e "${BLUE}=== BernyBot Mock Mode Toggle ====${NC}"

# Check if we have the necessary files
if [ ! -f "$MOCK_FILE" ]; then
  echo -e "${RED}Mock implementation file $MOCK_FILE not found!${NC}"
  exit 1
fi

# Function to enable mock mode
enable_mock() {
  # Create backup if it doesn't exist
  if [ ! -f "$BACKUP_FILE" ]; then
    echo -e "${BLUE}Creating backup of original implementation...${NC}"
    cp "$ROUTE_FILE" "$BACKUP_FILE"
  fi
  
  # Replace with mock implementation
  echo -e "${BLUE}Enabling mock mode...${NC}"
  cp "$MOCK_FILE" "$ROUTE_FILE"
  
  echo -e "${GREEN}Mock mode enabled! BernyBot will now use hardcoded responses.${NC}"
  echo -e "This is perfect for testing without using OpenAI API credits."
  echo -e "Restart the server with ${BLUE}npm run dev${NC} for changes to take effect."
}

# Function to restore original implementation
restore_original() {
  if [ ! -f "$BACKUP_FILE" ]; then
    echo -e "${RED}No backup file found at $BACKUP_FILE!${NC}"
    echo -e "Cannot restore original implementation."
    exit 1
  fi
  
  echo -e "${BLUE}Restoring original implementation...${NC}"
  cp "$BACKUP_FILE" "$ROUTE_FILE"
  
  echo -e "${GREEN}Original implementation restored!${NC}"
  echo -e "BernyBot will now use the OpenAI API for responses."
  echo -e "Make sure your OPENAI_API_KEY is correctly set in .env"
  echo -e "Restart the server with ${BLUE}npm run dev${NC} for changes to take effect."
}

# Parse command line arguments
case "$1" in
  "mock")
    enable_mock
    ;;
  "original")
    restore_original
    ;;
  *)
    echo -e "${BLUE}Usage:${NC}"
    echo -e "  ./toggle-mock-berny-bot.sh mock     - Enable mock mode (hardcoded responses)"
    echo -e "  ./toggle-mock-berny-bot.sh original - Restore original OpenAI implementation"
    ;;
esac 