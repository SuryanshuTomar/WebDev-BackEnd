const friends = require("../models/friends.models");

function postFriend(req, res) {
	if (!req.body.name) {
		return res.status(400).json({
			error: "Missing friend name",
		});
	}

	const newFriend = {
		id: friends.length,
		name: req.body.name,
	};
	friends.push(newFriend);
	res.json(newFriend);
}

function getFriends(req, res) {
	res.json(friends);
}

function getOneFriend(req, res) {
	const friendsId = Number(req.params.id);
	const friend = friends[friendsId];
	if (friend) res.status(200).json(friend);
	else
		res.status(404).json({
			error: "No Friends Found",
		});
}

module.exports = { getFriends, getOneFriend, postFriend };
