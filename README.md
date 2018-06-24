# Making Sense Challenge

Here is the code for the challenge, the final result could be seen on [https://lrabuffetti.github.io/mk-challenge/](https://lrabuffetti.github.io/mk-challenge/)

## Usage

If you want to clone the repo and run it locally, you can follow the next steps:

git clone https://github.com/lrabuffetti/mk-challenge

After installation, run `npm install` and then run `gulp dev` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `gulpfile.js` to see which tasks are included with the dev environment.

#### Gulp Tasks

- `gulp` the default task that builds everything
- `gulp dev` browserSync opens the project in your default browser and live reloads when changes are made
- `gulp sass` compiles SCSS files into CSS
- `gulp minify-css` minifies the compiled CSS file
- `gulp minify-js` minifies the themes JS file
- `gulp copy` copies dependencies from node_modules to the vendor directory
