import { series, parallel, src, dest }  from 'gulp'
// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import dartSass from 'sass'
import fs from 'fs-extra'
import { resolve } from 'node:path'
import { generateTypes } from './scripts/genType'
const { existsSync, emptyDir, mkdirSync } = fs

function ensureEmptyDir(dir: string) {
  existsSync(dir) ? emptyDir(dir) : mkdirSync(dir)
}

// function typeScriptTransfrom () {
//   return src('src/*.ts').pipe()
// }
const cssDir = resolve(__dirname, 'css')
const themesDir = resolve(__dirname, 'themes')

function buildStyle() {  
  ensureEmptyDir(cssDir)
  const sass = gulpSass(dartSass)
  return src(resolve(__dirname, 'styles/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS())
    .pipe(dest(cssDir))
}
export default parallel(buildStyle, generateTypes)
