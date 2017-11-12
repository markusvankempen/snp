
var exec = require('child_process').exec;

        console.log('pulling code from GitHub... mvk20171112');
  // now pull down the latest
        exec('git -C ~/gittest/snp pull -f', execCallback);


function execCallback(err, stdout, stderr) {
        if(stdout) console.log(stdout);
        if(stderr) console.log(stderr);
}

     
