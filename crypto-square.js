var Crypto = function(text) {
	this.message = text;

};

Crypto.prototype.normalizePlaintext = function() {
	return this.message.replace(/[\W]/g, "").toLowerCase();
	I
};

module.exports = Crypto;
