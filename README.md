# Pure CSS Shaders Art

<a href="https://chenglou.me/pure-css-shaders-art/heart.svg"><img src="heart.svg" style="width: 100%; height: 80vh;"></a>

Shaders art made with pure CSS, with an editable code area also made in CSS.

<img width="700" alt="Quick Look" src="https://user-images.githubusercontent.com/1909539/154792697-d8740074-ff14-49b4-b8f1-28096ce3e5ba.png">
iOS & macOS previews disable JavaScript. Fortunately, we don't have JS 🙂

The demos are responsive & editable even on mobile. Check out this repo's various `html` sources.

- [Happy Valentines](https://chenglou.github.io/pure-css-shaders-art/heart.svg)
- [Lord of Rings](https://chenglou.github.io/pure-css-shaders-art/ring.html) (a bit slow)
- [Real Squircle, anti-aliased](https://chenglou.github.io/pure-css-shaders-art/squircle.html) from [iOS](https://99percentinvisible.org/article/circling-square-designing-squircles-instead-rounded-rectangles/) since CSS can't do squircles

## FAQ

- **How does this work?**

  It's a grid of `<p />` with a single p style for `background-color`, calculated using CSS `calc()`, `:hover`, keyframes and custom properties. Just your typical CSS + math.

  The live editor is a `style` tag with `display: block` and `contenteditable="true"` 😝

  GitHub Markdown disables JS, `<style />`, `<svg />` and anything interactive. So I put:
  - Style inside an HTML page
  - Inside a SVG `<foreignObject />`
  - Inside an `img` link
  - Inside GitHub README markdown which does support `img`

- **Why bother keeping the code clean if no one will read or modify this nonsense?**

  I bet they will! I bet you are =P

- **Is this a joke**

  CSS or shaders?

## Contribute

Make your own CSS shader art and spread the joy! Ping me on [Twitter](http://twitter.com/_chenglou); I'd like to see what you've made!

## Further Reading

Wanna get started on shaders? Try:

- [Book of Shaders](https://thebookofshaders.com)
- [Shadertoy](https://www.shadertoy.com)
- [Inigo Quilez' website](https://iquilezles.org)

## Credits

- Thanks to [Johnathon Selstad](twitter.com/makeshifted) for the SVG idea!
