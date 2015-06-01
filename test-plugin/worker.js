module.exports = function(hoodie, doneCallback) {
	hoodie.task.on('test:change', function(task) {
		//router[task.subtype](originDb, task);
		console.log('Ok we gucci');
	});

	hoodie.account.findAll(function(error, accounts) {
		accounts.forEach(function(account) {
			hoodie.task.addSource('user/' + account.hoodieId);
			console.log('I listen to : user/' + account.hoodieId);
		})
	});

	doneCallback();
};