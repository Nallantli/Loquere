
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://admin:brick234@cluster0-shard-00-00-iddak.mongodb.net:27017,cluster0-shard-00-01-iddak.mongodb.net:27017,cluster0-shard-00-02-iddak.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
	const assert = require('assert');
	const dbName = "accounts";
	
	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
		console.log("Connected successfully to server");
		client.close();
	});

	function login(){
		MongoClient.connect(url, function(err, client) {
			assert.equal(null, err);
			console.log("Connected successfully to server");
			const users = client.db(dbName).collection('users');
			var username = usernameInput.value;
			var password = passwordInput.value;
			users.find({"username":username, "password":password}).toArray(function(err, docs) {
				console.log(docs);
				localStorage.setItem("username", username);
				client.close();
			});
		});
	}
	
	const usernameInput = document.getElementById("username");
	const passwordInput = document.getElementById("password");
	const submitButton = document.getElementById("submit");
	submitButton.addEventListener("click", login);