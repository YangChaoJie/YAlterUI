// scripts/publish.js
const inquirer = require('inquirer')
// const globby = require('globby')
const fs = require('fs-extra')
const handlebars = require('handlebars')
// const execa = require('execa')
const cwd = process.cwd()

const getPackagePath = () => {
  return (async () => {
    const { globbySync } = await import('globby')
    const packagePaths = globbySync('../packages', {
      cwd: __dirname,
      onlyDirectories: true,
      deep: 1,
    })
    console.log('packagePaths----', packagePaths);
    return packagePaths.map((item) => item.replace('../', ''))
  })()
}

const choosePackage = async (packages) => {
  const answer = await inquirer.prompt({
    type: 'checkbox',
    name: 'packages',
    message: '选择你要发布的包',
    choices: [...packages],
  })
  return answer
}

const reWriteLerna = (packages) => {
  const jsonContent = fs.readFileSync(`${cwd}/scripts/lerna-template.txt`, 'utf-8')
  const jsonResult = handlebars.compile(jsonContent)(packages)
  fs.writeFileSync(`${cwd}/lerna.json`, jsonResult)
}

const publish = async () => {
  const packages = await getPackagePath()
  console.log('packages----', packages);
  const publishPackages = await choosePackage(packages)
  if (publishPackages.packages.length !== 0) {
    reWriteLerna(publishPackages)
      return (async () => {
        const execaCommand = (await import('execa')).execaCommand;
        execaCommand('lerna publish', {
          stdio: 'inherit',
          cwd,
        })
      })();
  } else {
    console.log("没有选择包")
  }
}

publish()
