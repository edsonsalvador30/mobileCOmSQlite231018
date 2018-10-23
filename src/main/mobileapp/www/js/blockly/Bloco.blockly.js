window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Bloco = window.blockly.js.blockly.Bloco || {};

/**
 * Bloco
 */
window.blockly.js.blockly.Bloco.CriaBanco = function() {

	var item, i, nomeBanco;
	nomeBanco = 'teste';
	this.cronapi.cordova.database.openDatabase(nomeBanco);
	this.cronapi.cordova.database.executeSql(nomeBanco,
			'create table cliente(\nid text PRIMAREY_KEY,\nnome text);', null,
			function(sender_item) {
				item = sender_item;
				this.blockly.js.blockly.Bloco.InsereBanco();
			}.bind(this), function(sender_item) {
				item = sender_item;
			}.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Bloco.InsereBanco = function() {

	var item, i, nomeBanco;
	nomeBanco = 'teste';
	this.cronapi.screen.notify('warning', 'Insert Funcionou');
	this.cronapi.cordova.database.executeSql(nomeBanco,
			'insert into cliente values (?,?)', ['test', 'Edson'], function(
					sender_item) {
				item = sender_item;
			}.bind(this), function(sender_item) {
				item = sender_item;
			}.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Bloco.RecuperaBanco = function() {

	var item, i, nomeBanco;
	nomeBanco = 'teste';
	this.cronapi.cordova.database.executeSql(nomeBanco,
			'select * from cliente', null, function(sender_item) {
				item = sender_item;
				for ( var i_index in item) {
					i = item[i_index];
					this.cronapi.screen.notify('success', this.cronapi.object
							.getProperty(i, 'nome'));
				}
			}.bind(this), function(sender_item) {
				item = sender_item;
			}.bind(this));
}
