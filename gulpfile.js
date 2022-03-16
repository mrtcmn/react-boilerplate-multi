const gulp = require('gulp');
const util = require('gulp-util');
const path = require('path');
const replace = require('gulp-replace');
const git = require('gulp-git');
const { exec } = require('child_process');
const fs = require('fs');

let new_version_string = 1;

gulp.task('ng-bump-version', (done) => {
  const env_dir_path = path.resolve(__dirname, './config');
  const env_file_path = path.join(env_dir_path, 'version.js');

  return gulp
    .src([env_file_path])
    .pipe(
      replace(/version:\s?'\d+.\d+.\d+',?/g, function (match) {
        const matches = /(version:\s?')(\d+.\d+.\d+)(',?)/g.exec(match);
        const version_string = matches[2];
        const version_parts = version_string.split('.').map((v) => +v);
        let versionPartsNum = `${version_parts[0]}${version_parts[1]}${version_parts[2]}`;
        versionPartsNum++;
        console.log(versionPartsNum);
        new_version_string = `${versionPartsNum}`
          .split('')
          .reduce(
            (item, acc, index) =>
              item + (index === 1 ? '.' : '') + acc + (index === 2 ? '' : '.')
          );
        const replaced_version_string = match.replace(
          version_string,
          new_version_string
        );
        console.log(
          `${this.file.path} New version to be written: ${replaced_version_string}`
        );
        done();

        return replaced_version_string;
      })
    )
    .pipe(gulp.dest(env_dir_path))
    .on('error', (err) => console.log(err));
});

gulp.task(
  'increaseVersion',
  gulp.series('ng-bump-version', function (done) {
    exec('git add .', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      git.tag(new_version_string, 'Version message', function (err) {
        if (err) throw err;

        exec(
          `npm version "${new_version_string}" --no-git-tag-version`,
          function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);

            exec(
              'git add . && git commit --no-verify',
              function (err, stdout, stderr) {
                console.log(stdout);
                console.log(stderr);

                done();
              }
            );
          }
        );
      });
    });
  })
);
