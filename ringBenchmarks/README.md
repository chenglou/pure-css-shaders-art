# Ring CSS vs JS Performance Benchmarks

This ports the parent folder's [One Ring](https://chenglou.me/pure-css-shaders-art/ring.html) to use various saner JS primitives instead of pure CSS, to check speed differences.

- `ringPureJS.html`: a straight port of `ring.html`, animated using `requestAnimationFrame` instead of CSS timer and JS variables & functions instead of CSS variables & functions.
- `ringJsTimerCSSRest.html`: `ring.html` but with only the `--time` CSS timer variable ported to JS `requestAnimationFrame`. Just a (mistaken) guts feeling that Ring's CSS `keyframes` timer was the slow part.
- `ringHalfJSHalfCSS.html`: `ring.html` but with `--time`, `--dist` and `--quadrant-div` ported to JS. Another guts feeling that maybe the slow part is those `p`s dedicated `--x` and `--y` CSS variables declared through the selectors at the top of the file.

## Conclusion

- The original pure CSS `ring.html` is naturally the slowest, though maybe not intutive for many devs, who think CSS = faster.
- `ringTimerCSSRest.html` is slightly faster but not by much.
- `ringHalfJSHalfCSS.html` is faster by a bit.
- `ringPureJS.html` is perfect 120fps.

Every time we remove CSS variables, things get noticeably faster. I suspect that CSS variables have room to be optimized by browsers, but that they'll stay much slower than JS variables due to their nature. Might be decades before such CSS demo catch up to JS speed, even assuming CSS doesn't bloat up even further.

So the push to cram more things into CSS will probably result in a web that gradually slows down over time (contrary to usual folks optimism), while every other kind of software either breaks even or get faster.
