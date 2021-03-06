#!/usr/bin/env node

'use strict';

const fs = require('fs');
const cl = require('conventional-changelog');

const changelogStream = fs.createWriteStream('CHANGELOG.md');

const config = {
  preset: 'angular',
  releaseCount: 0,
};

cl(config).on('error', (err) => {
  console.error('Failed to generate changelog: ' + err);
}).pipe(changelogStream);
