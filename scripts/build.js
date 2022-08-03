const spawn = require('cross-spawn')

let target = process.argv[2]
const alias = {
  api: '@yalertui/components',
  docs: 'docs',
}
target = alias[target] || target

let result
if (!target) {
  result = spawn.sync('yarn', ['lerna', 'run', 'build', '--stream'], { stdio: 'inherit' })
} else {
  result = spawn.sync('yarn', ['lerna', 'run', 'build', '--scope', target, '--stream', '--no-prefix'], { stdio: 'inherit' })
}

process.exitCode = result.status
