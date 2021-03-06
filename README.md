# gulp-remote-less

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/gulp-remote-less.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/gulp-remote-less?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/gulp-remote-less.png)](https://travis-ci.org/LingyuCoder/gulp-remote-less)
[![Dependency Status](https://david-dm.org/LingyuCoder/gulp-remote-less.svg)](https://david-dm.org/LingyuCoder/gulp-remote-less)
[![devDependency Status](https://david-dm.org/LingyuCoder/gulp-remote-less/dev-status.svg)](https://david-dm.org/LingyuCoder/gulp-remote-less#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/gulp-remote-less.svg?style=flat-square)](http://npmjs.org/package/gulp-remote-less)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/gulp-remote-less.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/gulp-remote-less.svg?style=flat-square)](https://npmjs.org/package/gulp-remote-less)

Import remote less by `@import`

**Node.js >= 4.0.0**

## Installation

```bash
$ npm install --save-dev gulp
$ npm install --save-dev gulp-less
$ npm install --save-dev gulp-remote-less
```

## Usage

Add `gulp-remote-less` to your `gulpfile.js` like this:

```javascript
const gulp = require('gulp');
const remoteLess = require('gulp-remote-less');
const less = require('gulp-less');

gulp.task('demo', function() {
  return gulp.src('src/**/*')
    .pipe(remoteLess({
      // your config
    }))
    .pipe(less())
    .pipe(gulp.dest('build'));
});
```

Then you can import remote less file like this:

```less
@import 'http://lingyucoder.github.io/gulp-remote-less/test/source/a.less';

.someClass {

}
```

## Options

| Name       | Description  | Type | Default Value |
| :-------- | :-- | :--:| :--: | :--: |
| useLocal | Use local file | Boolean | `true` |
| timeout | Timeout when fetch remote file | Number | `5000` |
| base | Local folder where remote file saved | String | `'remote'` |
| debug | Open debug mode | Boolean | `false` |

## Test

```bash
$ npm run test
$ npm run cov
$ npm run travis
```

## License

The MIT License (MIT)

Copyright (c) 2015 LingyuCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
