import{pathExists,outputJSON,outputFile}from"fs-extra";import chalk from"chalk";var errorMsg=chalk.bold.red,warnMsg=chalk.bold.keyword("orange"),createMsg=chalk.bold.green,updateMsg=chalk.bold.blue,lightMsg=chalk.bold.magenta,outputContent=function(a,b,c){if("object"==typeof b){outputJSON(a,b,{spaces:2}).then(function(){return console.info(c)}).catch(function(a){return console.error(errorMsg(a))})}else{outputFile(a,b).then(function(){return console.info(c)}).catch(function(a){return console.error(errorMsg(a))})}},genFile=function(a){var b=a.filename,c=a.template,d=a.path,e=void 0===d?"":d,f=a.update,g=e.replace(/(^\/)|(\/$)/g,"");g=g?g+"/"+b:b;pathExists(g,function(a,b){if(!b){outputContent(g,c,createMsg("[create]")+": "+lightMsg(g)+" successfully!")}else{if(f){outputContent(g,c,updateMsg("[update]")+": "+lightMsg(g)+" successfully!")}else{console.info(warnMsg("[warn]")+": "+lightMsg(g)+" already exists!")}}})};export default genFile;
