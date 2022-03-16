const gitBranchIs = require('git-branch-is');
const { exec } = require('child_process');

gitBranchIs('main', function (err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log(result ? 'On main' : 'Not on main');

    if (result) {
      exec(
        'prettier --write "**/*.+(js|jsx|json|css|md)"',
        function (err, stdout, stderr) {
          console.log(stdout);
          console.log(stderr);

          exec('npm run bump-version', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
          });
        }
      );
    } else {
      exec(
        'prettier --write "**/*.+(js|jsx|json|css|md)"',
        function (err, stdout, stderr) {
          console.log(stdout);
          console.log(stderr);
        }
      );
    }
  }
});
