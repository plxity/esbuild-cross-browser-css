const {
  compile,
  serialize,
  stringify,
  middleware,
  prefixer,
} = require('stylis');

const CrossBrowserCss = () => ({
  name: 'All browser CSS plugin',
  setup(build) {
    let fs = require('fs');

    build.onResolve({ filter: /.\.css$/ }, (args) => {
      // console.log(args);
    });
    const preprocessStyles = (styles) =>
      serialize(compile(styles), middleware([prefixer, stringify]));

    build.onLoad({ filter: /.\.css$/ }, async (args) => {
      let cssContent = await fs.promises.readFile(args.path, 'utf-8');
      let modifiedCssContent = preprocessStyles(cssContent);

      return {
        contents: modifiedCssContent,
        loader: 'css',
      };
    });
  },
});

export default CrossBrowserCss;
