#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Berny Bot Setup ====${NC}"
echo -e "Setting up the Star Wars-themed AI assistant for your portfolio"
echo

# Install the OpenAI package
echo -e "${GREEN}Installing the OpenAI SDK...${NC}"
npm install openai

# Check if .env.local exists
if [ -f .env.local ]; then
    echo -e "${GREEN}Found .env.local file${NC}"
    
    # Check if it contains OPENAI_API_KEY
    if grep -q "OPENAI_API_KEY" .env.local; then
        echo -e "${GREEN}OPENAI_API_KEY found in .env.local${NC}"
    else
        echo -e "${BLUE}Adding OPENAI_API_KEY to .env.local${NC}"
        echo "# OpenAI API Key - Replace with your actual API key" >> .env.local
        echo "OPENAI_API_KEY=your_openai_api_key_here" >> .env.local
    fi
else
    echo -e "${BLUE}Creating .env.local file with OPENAI_API_KEY${NC}"
    echo "# OpenAI API Key - Replace with your actual API key" > .env.local
    echo "OPENAI_API_KEY=your_openai_api_key_here" >> .env.local
fi

echo
echo -e "${RED}IMPORTANT:${NC} You need to edit .env.local and add your actual OpenAI API key"
echo -e "Get your API key from: ${BLUE}https://platform.openai.com/${NC}"
echo
echo -e "${GREEN}Berny Bot setup complete!${NC}"
echo -e "Run ${BLUE}npm run dev${NC} to start your application" 