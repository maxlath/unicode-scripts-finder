# unicode-scripts-finder

> There are 143,859 characters, with Unicode 13.0, covering 154 modern and historical scripts, as well as multiple symbol sets [[wikipedia: List of Unicode characters](https://en.wikipedia.org/wiki/List_of_Unicode_characters)]

Find which unicode scripts a text is using.

Status: WIP but already somewhat useful

## Install
To use the JS module in a project:
```sh
npm i unicode-scripts-finder
```

To use the CLI, rather install it globally to make the command `unicode-scripts-finder` available in your `$PATH`:
```sh
npm i -g unicode-scripts-finder
```

## Module
```js
const unicodeScriptsFinder = require('unicode-scripts-finder')

unicodeScriptsFinder('Lorem ipsum dolor sit amet')
// => [ { label: 'Latin', count: 370 } ]

unicodeScriptsFinder('ἀπόστασις')
// => [ { label: 'Greek', count: 9 } ]

unicodeScriptsFinder('Lorem ipsum ἀπόστασις')
// => [ { label: 'Latin', count: 10 }, { label: 'Greek', count: 9 } ]
```

## CLI
```sh
unicode-scripts-finder Lorem ipsum dolor sit amet
# => [
#   {
#     "label": "Latin",
#     "count": 22
#   }
# ]
```
