# Ring CSS vs JS Performance Benchmarks

This ports the parent folder's [One Ring](https://chenglou.me/pure-css-shaders-art/ring.html) to use various saner JS primitives instead of pure CSS, to check speed differences.

- [`ringPureJS.html`](https://chenglou.me/pure-css-shaders-art/ringBenchmarks/ringPureJS.html): a straight port of `ring.html`, animated using `requestAnimationFrame` instead of CSS timer and JS variables & functions instead of CSS variables & functions.
- [`ringJsTimerCSSRest.html`](https://chenglou.me/pure-css-shaders-art/ringBenchmarks/ringJsTimerCSSRest.html): `ring.html` but with only the `--time` CSS timer variable ported to JS `requestAnimationFrame`. Just a (mistaken) guts feeling that Ring's CSS `keyframes` timer was the slow part.
- [`ringHalfJSHalfCSS.html`](https://chenglou.me/pure-css-shaders-art/ringBenchmarks/ringHalfJSHalfCSS.html): `ring.html` but with `--time`, `--dist` and `--quadrant-div` ported to JS. Another guts feeling that maybe the slow part is those `p`s dedicated `--x` and `--y` CSS variables declared through the selectors at the top of the file.

## Results

- The original pure CSS `ring.html` (parent folder) is the slowest.
- [`ringTimerCSSRest.html`](https://chenglou.me/pure-css-shaders-art/ringBenchmarks/ringTimerCSSRest.html) is slightly faster but not by much.
- [`ringHalfJSHalfCSS.html`](https://chenglou.me/pure-css-shaders-art/ringBenchmarks/ringHalfJSHalfCSS.html) is faster by a bit.
- [`ringPureJS.html`](https://chenglou.me/pure-css-shaders-art/ringBenchmarks/ringPureJS.html) is perfect 120fps.

It looks like every time a CSS variable gets moved into JS, things get faster. Though some CSS variables are much more expensive than others. If you're still curious, I've forked off `ringJsTimerCSSRest.html` into `ringDebug.html`. Open the inspector and check the flashing rate of `<html style="--time:...">` for a rough idea of performance. Try these:
- Uncomment the selectors at the beginning. Things should be super slow.
- (Recomment the selectors) uncomment line 92 (`s.style.setProperty('--thisIsUnused', 1)`). A single, upfront `setProperty` now slows things down as much.
- Uncomment the last chunk of `--dot1` to `--dot9`. No slowdown.
- Uncomment both the first chunk (selectors) and last chunk (`--dot1` to `--dot9`). The slowest slowdown.

It seems like a combination of nonlocal, nonstatic, and nontrivial CSS variables usages trigger >100x slowdowns.

Ping if you have clearer findings! Have fun!
