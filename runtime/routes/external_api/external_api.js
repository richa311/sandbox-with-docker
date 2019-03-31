/**
*@author Richa Rochna
*
*/

exports.getQueries = function(req, res){
	res.status(200);
	res.type('json');
	res.render('external_api/external_api_response')
}