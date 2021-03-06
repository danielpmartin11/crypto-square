var Crypto = function(text) {
	this.message = text;

};

Crypto.prototype.normalizePlaintext = function() {
	return this.message.replace(/[\W]/g, "").toLowerCase();
	I
};


Crypto.prototype.size = function(){
	var x = this.nomralizePlaintext().length;
	return Math.ceil(Math.sqrt(x));

};

Crypto.prototype.plaintextSegments = function(){
	var x = this.normalizePlaintext();
	var squareSize = this.size();
	var square = [];
	
	for(var i = 0; i < x.length; x = x + squareSize){

		if(x.slice(i, squareSize).length != squareSize){
			square.push(x.slice( i, 0));
		}
		else
			square.push(x.slice(i, squareSize));
	}

	return square;

];


Crypto.prototype.ciphertext = function() {

	var ct = "";
	var size = this.size();
	var segs = this.plaintextSegments();

	for(var i = 0; i < size; i += 1)
		for(var j = 0; j < segs.length; j += 1)
			ct += segs[j].charAt(i);
	
	return ct;

}

module.exports = Crypto;
