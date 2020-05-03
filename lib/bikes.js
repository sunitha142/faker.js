

function Bikes(faker) {

	this.bajaj = function () {
		return faker.random.arrayElement(faker.definitions.bikes.bajaj);
	}

	this.tvs = function () {
		return faker.random.arrayElement(faker.definitions.bikes.tvs);
	}

	this.brake = function () {
		return faker.random.arrayElement(faker.definitions.bikes.brake);
	}

	this.year = function () {
		return faker.random.arrayElement(faker.definitions.bikes.year);
	}

	this.year = function () {
		return faker.random.arrayElement(faker.definitions.bikes.year);
	};
}

module['exports'] = Bikes;


