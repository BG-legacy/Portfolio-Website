#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Berny Bot Testing Guide ====${NC}"
echo 

echo -e "${YELLOW}NOTE: If you don't have a valid OpenAI API key, use mock mode:${NC}"
echo -e "   ./toggle-mock-berny-bot.sh mock"
echo

echo -e "${GREEN}Step 1:${NC} Make sure the development server is running:"
echo -e "   npm run dev"
echo 
echo -e "${GREEN}Step 2:${NC} Open http://localhost:3000 in your browser"
echo
echo -e "${GREEN}Step 3:${NC} Test BernyBot functionality:"
echo -e "   1. Click the blue BB button in the bottom right corner to open the chat"
echo -e "   2. Try asking questions about Bernard's portfolio"
echo -e "   3. Test the tour mode by toggling the 'Tour: OFF' button"
echo -e "   4. Navigate through different sections of the portfolio with tour mode on"
echo
echo -e "${GREEN}Sample questions to try:${NC}"
echo -e "   - What projects has Bernard worked on?"
echo -e "   - What are Bernard's technical skills?"
echo -e "   - Tell me about Bernard's experience?"
echo -e "   - Can you guide me through this portfolio?"
echo
echo -e "${GREEN}Testing rate limits:${NC}"
echo -e "   - Send multiple messages in quick succession to test rate limiting"
echo
echo -e "${GREEN}Mock mode:${NC}"
echo -e "   In mock mode, BernyBot will respond to keyword patterns:"
echo -e "   - Words like 'skills', 'abilities', 'tech' → Skills response"
echo -e "   - Words like 'projects', 'portfolio', 'work' → Projects response"
echo -e "   - Words like 'experience', 'job', 'career' → Experience response"
echo -e "   - Tour mode will show pre-written responses for each section"
echo
echo -e "${GREEN}API modes:${NC}"
echo -e "   - ${YELLOW}Real mode:${NC} (Requires valid OpenAI API key)"
echo -e "     GPT-3.5-Turbo for tour mode (faster responses)"
echo -e "     GPT-4 for regular chat (more detailed responses)"
echo -e "   - ${YELLOW}Mock mode:${NC}"
echo -e "     Hardcoded responses based on message keywords"
echo -e "     No API key required, perfect for testing"
echo
echo -e "${GREEN}To stop testing:${NC} Press Ctrl+C in the terminal running the dev server"
echo
echo -e "${GREEN}To switch back to original mode:${NC}"
echo -e "   ./toggle-mock-berny-bot.sh original"
echo
echo -e "${BLUE}May the Force be with you!${NC}" 