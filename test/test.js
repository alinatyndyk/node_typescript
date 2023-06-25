console.log('From test.js');

function pathLog(){
    console.log('From test.js');
    console.log(__dirname); // папка сейчас
    console.log(__filename); // файл сейчас
    console.log(process.cwd()); // папка запуска
}

module.exports = {
    pathLog,
}
