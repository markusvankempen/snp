
var exec = require('child_process').exec;

        console.log('pulling code from GitHub... mvk20171112 v1');
  // now pull down the latest
        exec('git -C /home/pi/gittest/snp pull -f', execCallback);
  //
        exec('sudo systemctl status  gitupdater.service', execCallback);

function execCallback(err, stdout, stderr) {
        if(stdout) console.log(stdout);
        if(stderr) console.log(stderr);
}

     
