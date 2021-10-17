## ESBuild Cross Browser CSS Plugin

An ESBuild plugin to add support for cross-browser CSS.
## Example

**Input**

```css
div{
  display: flex
}
```

**Output**

```css
div{
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
```

## Use

**Create a file**

`esbuild.config.js`
```JS

import esbuild from 'esbuild';
import CrossBrowserCSS from 'esbuild-plugin-cross-browser-css';

esbuild
    .build({
        entryPoints: ... // Input file
        bundle: true,
        outfile: ... // Output file
        plugins: [CrossBrowserCSS()]
    })
    .catch(() => process.exit(1));
```


