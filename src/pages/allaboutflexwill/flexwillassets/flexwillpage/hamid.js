let CURRENT_PERCENTAGE_VALUE = 0;
const MAXIMUM_PERCENTAGE = 100;
const beneficiaries = [
	{
		'id': '12345',
		'title': 'Mr',
		'fulllName': 'Olamilekan Famutimi',
		'relationship': 'Brother',
		'address': '24, Ade Omolakun Estate',
		'city': 'Ojota',
		'state': 'Lagos',
		'percentage': 0
	},
	{
		'id': '2222',
		'title': 'Mr',
		'fulllName': 'Olamilekan Famutimi',
		'relationship': 'Brother',
		'address': '24, Ade Omolakun Estate',
		'city': 'Ojota',
		'state': 'Lagos',
		'percentage': 0
	},
	{
		'id': '1111',
		'title': 'Mr',
		'fulllName': 'Olamilekan Famutimi',
		'relationship': 'Brother',
		'address': '24, Ade Omolakun Estate',
		'city': 'Ojota',
		'state': 'Lagos',
		'percentage': 0
	}
];
​
/**
* @description Sends the data to the queue handlers
* @param {Number} value The notification payload
* @return {Bool}
*/
const checkPercentageValue = (value) => {
	if (value > MAXIMUM_PERCENTAGE) {
		return false;
	}
	return true;
};
​
/**
* @description Sends the data to the queue handlers
* @param {String} id The notification payload
* @param {String} percentage The notification payload
* @return {Array}
*/
const setPercentageValue = (id, percentage) => {
	const sumWithExistingValue = CURRENT_PERCENTAGE_VALUE + percentage;
	if (checkPercentageValue(sumWithExistingValue)) {
		return beneficiaries.map(values => {
			if (values.id == id) {
				values.percentage = percentage;
				CURRENT_PERCENTAGE_VALUE = sumWithExistingValue;
			}
		});
	}
	return 'Value exceeds maximum';
};
​
​
const inputPercentage = 40;
const inputTwoPercentage = 50;
setPercentageValue('12345', inputPercentage);
setPercentageValue('2222', inputTwoPercentage);
setPercentageValue('1111', 10);
console.log(beneficiaries);
console.log(CURRENT_PERCENTAGE_VALUE);
​