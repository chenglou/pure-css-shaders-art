let css = '';

for (let i = 1; i <= 100; i++) {
  css += `div:nth-child(${101 - i}) > span {--y: ${(i - 1) * 0.0101};}\n`;
}

for (let i = 1; i <= 100; i++) {
  css += `div > span:nth-child(${i}) {--x: ${(i - 1) * 0.0101};}\n`;
}

console.log(css);
