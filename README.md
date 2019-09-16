# nodeColor

Somes colors and logging.

## Colors

```js
const color = require('nodeColor'); // Add colors and timestamps to default console.log / warn / error
```




## Logging

```js
const color = require('nodeColor');

color.initLogging('filename', './logFoolder'); // Write default console.log / warn / err to specified file

color.setLog('AnOtherFilename', 'LOG', 'This is a log !');
color.setLog('AnOtherFilename', 'WARN', 'This is a warning !');
color.setLog('AnOtherFilename', 'ERR', 'This is an error !');
```
