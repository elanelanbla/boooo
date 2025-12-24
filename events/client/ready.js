const shell = require('shelljs');

module.exports = () => {
    console.log('Hosted online_specified?token_id');
    shell.exec('dyno deploy.js')
}
