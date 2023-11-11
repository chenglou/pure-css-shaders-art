// generate css for the grid
let cssX = ''
let cssY = ''
let cssMouseX = ''
let cssMouseY = ''

const count = 26 // ideally 1 / (count - 1) is also a well-rounded decimal number

for (let i = 0; i < count; i++) {
  const pos = i / (count - 1)

  cssX += `p:nth-child(${i + 1}) {--x: ${pos};}\n`
  cssMouseX += `body:has(p:nth-child(${i + 1}):hover) {--mouseX: ${pos};}\n`
  cssY += `div:nth-child(${count - i}) {--y: ${pos};}\n`
  cssMouseY += `body:has(div:nth-child(${count - i}):hover) {--mouseY: ${pos};}\n`
}

console.log(cssX)
console.log(cssY)
console.log(cssMouseX)
console.log(cssMouseY)
