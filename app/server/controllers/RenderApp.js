/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
import convert from "koa-convert";
import webpack from "webpack";
import React from "react";
import fs from 'fs'
import { renderToStaticMarkup } from "react-dom/server";
import { Provider } from "react-redux";
import { RouterContext, match } from "react-router";
import webpackDevMiddleware from "koa-webpack-dev-middleware";
import webpackHotMiddleware from "koa-webpack-hot-middleware";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import configureStore from "../../../src/store/configureStore";
import routes from "../../../src/routes/";
import webpackConfig from "../../../webpack.config";

const compiler = webpack(webpackConfig);

function renderFullPage(html, css, preloadedState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1" />
        <title>Redux Universal Example</title>
    </head>
    <body>
        <div id="app">${html}</div>
        <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <style type="text/css">${css}</style>
        <script src="/asset/bundle.js"></script>
    </body>
    </html>`;
}

export default function configureRenderApp(app) {
  app.use(
    convert(
      webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }
      })
    )
  );

  app.use(
    convert(
      webpackHotMiddleware(compiler, {
        log: console.log,
        path: "/__webpack_hmr",
        heartbeat: 10 * 1000
      })
    )
  );

  app.use(async ctx => {
    // Create a new Redux store instance
    const store = configureStore({ user: {} });
    // Grab the initial state from our Redux store
    const finalState = store.getState();
    match({ routes, location: ctx.url }, function(
      error,
      redirectLocation,
      renderProps
    ) {
      if (error) {
        this.throw(500, error.message);
      } else if (redirectLocation) {
        this.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const html = renderToStaticMarkup(
          <Provider store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: "all" })}>
              <RouterContext {...renderProps} />
            </MuiThemeProvider>
          </Provider>
        );
        const css = fs.readFileSync('./static/style.css');// FIX in further
        ctx.body = renderFullPage(html, css, finalState);
      } else {
        ctx.status = 404;
        ctx.body = "not found!";
      }
    });
  });
}
