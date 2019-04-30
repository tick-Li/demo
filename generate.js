var watch = require('watch');
var fs = require('fs');

readFile();

watch.createMonitor('./src/views', function (monitor) {
    monitor.files['./src/views/.jsx'] // Stat object for my zshrc.
    monitor.on("created", function (f, stat) {
        if (/\.jsx$/.test(f)) { readFile() }
    })
    monitor.on("changed", function (f, curr, prev) {
        // Handle file changes
    })
    monitor.on("removed", function (f, stat) {
        if (/\.jsx$/.test(f)) { readFile() }
    })
    // monitor.stop(); // Stop watching
});

function readFile(params) {
    var path = "./src/views";
    var files = fs.readdirSync(path);
    var list = [],
        _import = "",
        component = [];
    files.map((item, index) => {
        list.push(item)
    });
    list.forEach(getFile);

    function getFile(params) {
        var filelist = fs.readdirSync(path + '/' + params);
        filelist.map(function (item, index) {
            if (/\.jsx$/.test(item)) {
                var name, name_path, componentName;
                if (item.indexOf("index") != -1) {
                    name = params;
                    name_path = null;
                } else {
                    name = item.slice(0, item.length - 4);
                    name_path = params + "/" + name;
                }
                componentName = name.charAt(0).toUpperCase() + name.slice(1);
                component.push(`{path:"${name}",component: ${componentName}}`);
                _import += `import ${componentName} from "bundle-loader?lazy&name=${name}!views/${name_path ? name_path : name}";`
            }
        })
    }
    var str = _import + `module.exports = [${component}]`;
    fs.writeFile('./src/routers/routers.js', str, 'utf-8', function () {});
};