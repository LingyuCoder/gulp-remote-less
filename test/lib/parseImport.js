'use strict';

require('should');
require('should-promised');
const File = require('vinyl');
const parseImport = require('../../lib/parseImport');
const path = require('path');

describe('parseImport', () => {
  it('should get local path info', () => {
    return parseImport(new File({
        path: path.join(process.cwd(), 'a', 'b', 'c.less'),
        contents: new Buffer(`
        @import './d.less';
        @import '../e.less';
        @import 'https://abcdefg.com/f.less';
        @import 'https://abcdefg.com/a/b/c/d/f.less';
      `)
      }))
      .then(rst => rst.deps)
      .should.be.fulfilledWith([{
        path: path.join(process.cwd(), 'a', 'b', 'd.less'),
        raw: './d.less'
      }, {
        path: path.join(process.cwd(), 'a', 'e.less'),
        raw: '../e.less'
      }, {
        path: path.join(process.cwd(), 'remote', 'https', 'abcdefg.com', 'f.less'),
        url: 'https://abcdefg.com/f.less',
        raw: 'https://abcdefg.com/f.less'
      }, {
        path: path.join(process.cwd(), 'remote', 'https', 'abcdefg.com', 'a', 'b', 'c', 'd', 'f.less'),
        url: 'https://abcdefg.com/a/b/c/d/f.less',
        raw: 'https://abcdefg.com/a/b/c/d/f.less'
      }]);
  });
  it('should get remote path info', () => {
    let file = new File({
      path: 'random',
      contents: new Buffer(`
        @import './d.less';
        @import '../e.less';
        @import 'https://abcdefg.com/f.less';
        @import 'https://abcdefg.com/a/b/c/d/f.less';
      `)
    });
    file.url = 'http://asdf.com/a/b';
    return parseImport(file)
      .then(rst => rst.deps)
      .should.be.fulfilledWith([{
        path: path.join(process.cwd(), 'remote', 'http', 'asdf.com', 'a', 'd.less'),
        url: 'http://asdf.com/a/d.less',
        raw: './d.less'
      }, {
        path: path.join(process.cwd(), 'remote', 'http', 'asdf.com', 'e.less'),
        url: 'http://asdf.com/e.less',
        raw: '../e.less'
      }, {
        path: path.join(process.cwd(), 'remote', 'https', 'abcdefg.com', 'f.less'),
        url: 'https://abcdefg.com/f.less',
        raw: 'https://abcdefg.com/f.less'
      }, {
        path: path.join(process.cwd(), 'remote', 'https', 'abcdefg.com', 'a', 'b', 'c', 'd', 'f.less'),
        url: 'https://abcdefg.com/a/b/c/d/f.less',
        raw: 'https://abcdefg.com/a/b/c/d/f.less'
      }]);
  });
});
