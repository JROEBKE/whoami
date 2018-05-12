module.exports = {
  showWhoAmI: showWhoAmI
}

  
/**
 * Show who am I
*/
 function showWhoAmI(req, res) {
	
	var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
	var lg = req.headers["accept-language"];
	var os = req.headers["user-agent"];
	 
   	var result = {  
        ipaddress: ip,          
        language: lg,
		operating_system: os
	};  
	//console.log(result);		
	res.json(result);	
	
 }

 