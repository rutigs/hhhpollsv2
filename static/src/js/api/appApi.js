var baseURL = 'api/';
var inJson = '&format=json';

module.exports = {
	getOpenPolls: function(callback) {
		$.getJSON(baseURL + 'polls/?open=True' + inJson, function(result) {
			callback(result);
		});
	},
	getClosedPolls: function(callback) {
		$.getJSON(baseURL + 'polls/?open=False' + inJson, function(result) {
			callback(result);
		});
	},
	getChoices: function(poll) {
		$.ajax({
			url: baseURL + 'polls/choices/?poll=' + poll.id + inJson,
			dataType: 'json',
			cache: false,
			success: function(data) {
				return data;
			}
		});
	},
	addVote: function(choice) {
		$.ajax({
			url: baseURL + 'choices/id=' + choice.id + "&votes=" + (choice.votes + 1) + inJson,
			method: 'POST',
			dataType: 'json',
			cache: false,
			success: function(data) {
				//return data;
			}
		});
	},
};

// getOpenPolls: function(callback) {
// 	$.ajax({
// 		url: baseURL + 'polls/?open=True' + inJson,
// 		success: function(data) {
// 			callback(data);
// 		}.bind(this),
// 		error: function(xhr, status, err) {
// 			console.error(status, err.toString());
// 		}.bind(this)
// 	});
// },
// getClosedPolls: function() {
// 	$.ajax({
// 		url: baseURL + 'polls/?open=False' + inJson,
// 		success: function(data) {
// 			return data;
// 		}.bind(this),
// 		error: function(xhr, status, err) {
// 			console.error(status, err.toString());
// 		}.bind(this)
// 	});
// },