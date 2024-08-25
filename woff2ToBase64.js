const fs = require('fs');

// Read the font file
const font = fs.readFileSync('./FontWithASyntaxHighlighter-Regular.woff2');
// Convert to base64
const base64Font = font.toString('base64');
// Create the complete data URL
const dataUrl = `data:font/woff2;base64,${base64Font}`;

console.log(dataUrl);
