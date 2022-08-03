const spawn = require('cross-spawn')

let target = process.argv[2]
console.log('target:-----', target);
const alias = {
  docs: 'docs',
}
target = alias[target] || target

if (!target) {
  spawn('yarn', ['lerna', 'run', 'dev', '--scope', 'docs', '--stream'], { stdio: 'inherit' })
} else {
  spawn('yarn', ['lerna', 'run', 'dev', '--scope', target, '--stream'], { stdio: 'inherit' })
}
