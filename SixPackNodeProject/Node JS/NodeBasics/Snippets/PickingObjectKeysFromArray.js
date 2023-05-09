// Reference - https://medium.com/@5066aman/whats-the-deal-with-object-prototype-hasownproperty-call-45bf8f8e1e83

const pick = (object, keys) => {
	return keys.reduce((obj, key) => {
		if (object && Object.prototype.hasOwnProperty.call(object, key)) {
			// eslint-disable-next-line no-param-reassign
			obj[key] = object[key];
		}
		return obj;
	}, {});
};

// cherry-pick from the input schema ["params", "query", "body"] fields
const validSchema = pick(
	{
		params: "Something",
		NotParams: "Something 2",
		query: "Query1",
		query1: "Query2",
	},
	["params", "query", "body"]
);
console.log(validSchema);
