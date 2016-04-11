var Crypto = function(text) {
	this.message = text;

};

Crypto.prototype.normalizePlaintext = function() {
	return this.message.replace(/[\W]/g, "").toLowerCase();
	I
};


Crypto.prototype.size = function(){
	var x = this.message.nomralizePlaintext().length;
	return Math.floor(Math.sqrt(x));

};

module.exports = Crypto;
