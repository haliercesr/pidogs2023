//________________________oo0oo_
//______________________o8888888o
//______________________88" . "88
//______________________(| -_- |)
//______________________0\  =  /0
//_______________________/`---'\___
//__________________.' \\|     |// '.
//_________________/ \\|||  :  |||// \
//________________/ _||||| -:- |||||- \
//_______________|   | \\\  -  /// |   |
//_______________| \_|  ''\---/''  |_/ |
//_______________\  .-\__  '-'  ___/-. /
//________________'. .'  /--.--\  `. .'___
//__________."" '<  `.___\_<|>_/___.' >' "".
//_________| | :  `- \`.;`\ _ /`;.`/ - ` : | |
//_________\  \ `_.   \_ __\ /__ _/   .-` /  /
//_____=====`-.____`.___ \_____/___.-`___.-'=====
//_______________________`=---='
//_____~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {     //FORCE:TRUE cada ves que hagamos cambios en el servidor se va a borrar la base de datos. Cuando tengamos todo listo se recomienda setearlo en false para que se guarden los datos y no se borren
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
