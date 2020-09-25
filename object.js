let groupOfPeople = {
	person1: {
		firstName: 'Josh',
		lastName: 'Allen',
		age: 21
	},

	person2: {
		firstName: 'Nicole',
		lastName: 'Williams',
		age: 24
	},

	person3: {
		firstName: 'Roger',
		lastName: 'Beck',
		age: 29
	}
}

for(let person in groupOfPeople) {
	console.log(`${groupOfPeople[person].firstName} ${groupOfPeople[person].lastName}`)
}