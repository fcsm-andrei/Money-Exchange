// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var obj = {};
	var h = 50,
		q = 25,
		d = 10,
		n = 5,
		p = 1; 
	if(currency <= 10000 && currency > 0) {
		obj.H = Math.floor(currency / h);
		obj.Q = Math.floor((currency % h) / q);
		obj.D = Math.floor(((currency % h) % q) / d);
		obj.N = Math.floor((((currency % h) % q) % d) / n);
		obj.P = Math.floor((currency % n) / p);
	} else if(currency > 10000) {
		obj = {error: 'You are rich, my friend! We don\'t have so much coins for exchange'};
	} else {
		obj = {};
	}
	for (key in obj) {
  		if(obj[key] === 0){
  			delete obj[key];
  		}
	}  
    return obj;
}

  //console.log(makeExchange(0));  //--> {}
  //console.log(makeExchange(1));  //--> {"P":1}
  //console.log(makeExchange(43)); //--> {"Q":1,"D":1,"N":1,"P":3}
  //console.log(makeExchange(91)); //--> {"H":1,"Q":1,"D":1,"N":1,"P":1}
  //console.log(makeExchange(9999999));  //--> {error: "You are rich, my friend! We don't have so much coins for exchange"}