const {exec} = require("child_process");

console.warn("If App.vue or api.js was changed, you should deploy manually");

// get new code
const pull = (callback) => {
    exec("git pull", (error, stdout, stderr) => {
        if (error) {
            console.log(`Error occured: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`STDError occured: ${stderr}`);
            return;
        }
        console.log(`Message: ${stdout}`);
        callback();
    })
};

// build new version of app
const build = (callback) => {
    exec("npm run build", (error, stdout, stderr) => {
        if (error) {
            console.log(`Error occured: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`STDError occured: ${stderr}`);
            return;
        }
        console.log(`Message: ${stdout}`);
        callback();
    })
};

// delete old app
const clear = (callback) => {
    exec(`cd ../../public_html/ && rm -r !(".htaccess"|"backend")`, (error, stdout, stderr) => {
        if (error) {
            console.log(`Error occured: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`STDError occured: ${stderr}`);
            return;
        }
        console.log(`Message: ${stdout}`);
        callback();
    })
};

// copy new app to the public_html
const copy = (callback) => {
    exec("cd ../source/tk-education-frontend && cp -a dist/. ../../public_html/", (error, stdout, stderr) => {
        if (error) {
            console.log(`Error occured: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`STDError occured: ${stderr}`);
            return;
        }
        console.log(`Message: ${stdout}`);
        callback();
    })
};

pull(build(clear(copy())));
