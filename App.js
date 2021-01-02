#!/usr/bin/env node

var pkgUp = require('pkg-up'),
chalk = require('chalk'),
figlet = require('figlet'),
fs = require('fs');
(async () => {
fs.readFile(await pkgUp(), 'utf8', (err, data) => { 
var notfound = chalk.bold.red('Not Found')
pkgj = JSON.parse(data)
if(err) throw err
figlet('Project Info !!', (err, data) =>  {
if(err) throw err
console.log(chalk.yellow.bold(data))
console.log(`\nName : ${chalk.green(pkgj.name)} \nVersion : ${chalk.green(pkgj.version)} \nDescription : ${pkgj.description || notfound } \nMain File : ${pkgj.main} \nRepo Page : ${pkgj.repository.url || notfound }
Author : ${pkgj.author || notfound}  \nLicence : ${pkgj.license || notfound} \nIssue Page : ${pkgj.bugs.url || notfound} \nHome Page : ${pkgj.homepage || notfound} \n  `)
})
})})();