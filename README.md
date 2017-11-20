# videojs-single-tns-counter

Video.js plugin for one-time Mediascope TNS counter

## Table of Contents

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
npm install --save videojs-single-tns-counter
```

## Usage

To include videojs-single-tns-counter on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-single-tns-counter.min.js"></script>
<script>
  var player = videojs('my-video');

  player.singleTnsCounter();
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-single-tns-counter via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-single-tns-counter');

var player = videojs('my-video');

player.singleTnsCounter();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-single-tns-counter'], function(videojs) {
  var player = videojs('my-video');

  player.singleTnsCounter();
});
```

## License

MIT. Copyright (c) Sergey Gromkov &lt;sgromkov@gmail.com&gt;


[videojs]: http://videojs.com/
