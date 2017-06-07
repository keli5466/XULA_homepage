var exec = require('child_process').exec;
var sys = require('util');
var envSep = ~process.platform.indexOf('win') ? ';' : ':';

process.env.PATH = 'bin' + envSep + process.env.PATH;

exec('bower install', function(err, stdout, stderr){
  console.log(stdout);
});
