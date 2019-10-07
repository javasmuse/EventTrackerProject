window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {

	document.listAllWines.listAllWines.addEventListener('click',
			function(event) {
				event.preventDefault();
				cAll();
			});

	// document.wineById.wineById.addEventListener('click', function(event) {
	// event.preventDefault();
	// var wineId = document.wineById.wineId.value;
	// if (!isNaN(wineId) && wineId > 0) {
	// getWine(wineId);
	// }
	// });

	document.addWine.addWine.addEventListener('click', function(e) {
		e.preventDefault();
		addOne();
	});

}

function addOne() {
	let form = document.addWine;
	console.log('in the function create one');
	if (form.name.value !== '') {

		let wineC = {
			name : form.name.value,
			country : form.country.value,
			region : form.region.value,
			grape : form.grape.value,
			price : form.price.value,
			locationPurchased : form.locationPurchased.value,
			rating : form.rating.value,
			notes : form.notes.value,
			year : form.year.value,
			image : form.image.value,
			winery : form.winery.value,
		};

		let xhr = new XMLHttpRequest();
		xhr.open('POST', 'api/wine', true);
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status < 400) {
				wineC = JSON.parse(xhr.responseText);
				console.log('here i am');
				cAll();
			}
		};
		xhr.send(JSON.stringify(wineC));
	} else {
		let div = document.getElementById('createData');
		div.textContent = 'Missing Data, Please Try Again';
	}

};

function cAll() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "/api/wine");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			let wines = JSON.parse(xhr.responseText);
			displayWineAll(wines);
		}
	};
	xhr.send(null);
}

// function getWine(wineId) { // get by // ID
// let xhr = new XMLHttpRequest();
// xhr.open("GET", "/api/wine/" + wineId);
//
// xhr.onreadystatechange = function() {
// if (xhr.readyState === 4 && xhr.status < 400) {
// let wine = JSON.parse(xhr.responseText);
// displayWine(wine);
//
// } else {
//
// console.log('No WINE');
// let err = document.getElementById("outputById");
//
// err.textContent = 'Wine not found';
// }
// };
// xhr.send(null);
// }

function deleteWine(wid) {
	let xhr = new XMLHttpRequest();
	xhr.open("DELETE", "/api/wine/" + wid);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			// let wine2 = JSON.parse(xhr.responseText);
		} else {

			let err = document.getElementById("outputById");

			err.textContent = 'Wine not found';
		}
		let deleteText = document.getElementById("DeleteW");
	};
	xhr.send(null);
}

function editWine(wine) {

	let form = event.target.parentElement;
	console.log('in the function create one');
	console.log('in the editing');
	console.log(wine.name);
	console.log(wine.grape);
	console.log(wine.year);
	let wid = wine.id; 
	
	
	let wineC = {
		name : form.name.value,
		country : form.country.value,
		region : form.region.value,
		grape : form.grape.value,
		price : form.price.value,
		locationPurchased : form.locationPurchased.value,
		rating : form.rating.value,
		notes : form.notes.value,
		year : form.year.value,
		image : form.image.value,
		winery : form.winery.value
	}

	let xhr = new XMLHttpRequest();
	xhr.open('PUT', '/api/wine/' + wid);
	xhr.setRequestHeader('Content-type', 'application/json');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {

			let wineC = JSON.parse(xhr.responseText);
			console.log('here i am');
			cAll();
		}
	};
	xhr.send(JSON.stringify(wineC));
	form.reset();
}

function updateWine(wine) {

	let bodyW = document.getElementById('updateById');

	while (bodyW.firstElementChild) {
		bodyW.removeChild(bodyW.firstElementChild);
	}

	var UWform = document.createElement('form');

	UWform.id = 'UWform';
	UWform.name = 'UWform';
	bodyW.appendChild(UWform);

	// create an input field
	var nameW = document.createElement('input');
	nameW.name = 'nameW';
	nameW.type = 'text';
	nameW.value = wine.name;
	UWform.appendChild(nameW);
	
	var countryW = document.createElement('input');
	countryW.name = 'countryW';
	countryW.type = 'text';
	countryW.value = wine.country;
	UWform.appendChild(countryW);
	
	var regionW = document.createElement('input');
	regionW.name = 'regionW';
	regionW.type = 'text';
	regionW.value = wine.region;
	UWform.appendChild(regionW);
	
	var grapeW = document.createElement('input');
	grapeW.name = 'grapeW';
	grapeW.type = 'text';
	grapeW.value = wine.grape;
	UWform.appendChild(grapeW);
	
	var priceW = document.createElement('input');
	priceW.name = 'priceW';
	priceW.type = 'text';
	priceW.value = wine.price;
	UWform.appendChild(priceW);
	
	var locationPurchW = document.createElement('input');
	locationPurchW.name = 'locationPurchW';
	locationPurchW.type = 'text';
	locationPurchW.value = wine.locationPurchased;
	UWform.appendChild(locationPurchW);

	var ratingW = document.createElement('input');
	ratingW.name = 'ratingW';
	ratingW.type = 'text';
	ratingW.value = wine.rating;
	UWform.appendChild(ratingW);
	
	var notesW = document.createElement('input');
	notesW.name = 'notesW';
	notesW.type = 'text';
	notesW.value = wine.notes;
	UWform.appendChild(notesW);
	
	var yearW = document.createElement('input');
	yearW.name = 'yearW';
	yearW.type = 'text';
	yearW.value = wine.year;
	UWform.appendChild(yearW);

	var imageW = document.createElement('input');
	imageW.name = 'imageW';
	imageW.type = 'text';
	imageW.value = wine.image;
	UWform.appendChild(imageW);
	
	var wineryW = document.createElement('input');
	wineryW.name = 'wineryW';
	wineryW.type = 'text';
	wineryW.value = wine.winery;
	UWform.appendChild(wineryW);

	var submit = document.createElement('input');
	submit.name = 'submit';
	submit.type = 'submit';
	submit.value = 'Submit Form';
	UWform.appendChild(submit);
	// UWform.wineid = wine.id;

	document.UWform.submit.addEventListener('click', function(e) {
		e.preventDefault();
		// var form = e.target.parentElement;
		editWine(wine);

	});
}

function deleteUpdate(wid, wine) {
	
	let body = document.getElementById('deleteW');
	let form = document.createElement('form');
	body.appendChild(form);
	form.name = 'Delete this Wine?';

	var submit = document.createElement('input');
	submit.name = 'submit';
	submit.type = 'submit';
	submit.value = 'DELETE Wine';

	submit.addEventListener('click', function(e) {
		e.preventDefault();
		deleteWine(wid);
		form.reset();
	});

	form.appendChild(submit);
//	document.body.appendChild(form);

	let body2 = document.getElementById('updateW');
	let form2 = document.createElement('form');
	body2.appendChild(form2); 
	form2.name = 'Update this Wine?';

	var submit = document.createElement('input');
	submit.name = 'submit';
	submit.type = 'submit';
	submit.value = 'UPDATE Wine';

	submit.addEventListener('click', function(e) {
		e.preventDefault();
		console.log('clicked to update');
		updateWine(wine);
		form.reset();
	});

	form.appendChild(submit);
//	document.body.appendChild(form);
}

function displayWineAll(wines) { // output all

	let body = document.getElementById('showAll');

	let form = document.createElement('form');
	body.appendChild(form);
	form.name = 'Inventory';

	let table = document.createElement('table');
	form.appendChild(table);

	for (let i = 0; i < wines.length; i++) {
		let tr = document.createElement('tr');

		let td1 = document.createElement('td');
		td1.textContent = wines[i].name;
		tr.appendChild(td1);

		let td2 = document.createElement('td');
		td2.textContent = wines[i].country;
		tr.appendChild(td2);

		let td3 = document.createElement('td');
		td3.textContent = wines[i].region;
		tr.appendChild(td3);

		let td4 = document.createElement('td');
		td4.textContent = wines[i].grape;
		tr.appendChild(td4);

		let td5 = document.createElement('td');
		td5.textContent = wines[i].price;
		tr.appendChild(td5);

		let td6 = document.createElement('td');
		td6.textContent = wines[i].locationPurchased;
		tr.appendChild(td6);

		let td7 = document.createElement('td');
		td7.textContent = wines[i].rating;
		tr.appendChild(td7);

		let td8 = document.createElement('td');
		td8.textContent = wines[i].notes;
		tr.appendChild(td8);

		let td9 = document.createElement('td');
		td9.textContent = wines[i].year;
		tr.appendChild(td9);

		let td10 = document.createElement('td');
		td10.textContent = wines[i].image;
		tr.appendChild(td10);

		let td11 = document.createElement('td');
		td11.textContent = wines[i].winery;
		tr.appendChild(td11);

		let td12 = document.createElement('td');

		let submit = document.createElement('input');
		submit.name = 'submit';
		submit.type = 'submit';
		submit.value = 'View Wine';
		form.appendChild(submit);

		td12.appendChild(submit);
		tr.appendChild(td12);

		submit.addEventListener('click', function(e) {
			e.preventDefault();
			displayWine(wines[i]);
			var form = e.target.parentElement;
		});

		table.appendChild(tr);
		
		let inventory = document.getElementById('countAll'); 
		inventory.textContent = wines.length; 

	}
}

function displayWine(wine) { // output the wine with fields by // IDEA:
	let wid = wine.id;

	let body = document.getElementById('outputById');
	body.textContent = '';

	let table = document.createElement('table');
	body.appendChild(table);

	let tr = document.createElement('tr');

	let td1 = document.createElement('td');
	td1.textContent = wine.name;
	tr.appendChild(td1);

	let td2 = document.createElement('td');
	td2.textContent = wine.country;
	tr.appendChild(td2);

	let td3 = document.createElement('td');
	td3.textContent = wine.region;
	tr.appendChild(td3);

	let td4 = document.createElement('td');
	td4.textContent = wine.grape;
	tr.appendChild(td4);

	let td5 = document.createElement('td');
	td5.textContent = wine.price;
	tr.appendChild(td5);

	let td6 = document.createElement('td');
	td6.textContent = wine.locationPurchased;
	tr.appendChild(td6);

	let td7 = document.createElement('td');
	td7.textContent = wine.rating;
	tr.appendChild(td7);

	let td8 = document.createElement('td');
	td8.textContent = wine.notes;
	tr.appendChild(td8);

	let td9 = document.createElement('td');
	td9.textContent = wine.year;
	tr.appendChild(td9);

	let td10 = document.createElement('td');
	td10.textContent = wine.image;
	tr.appendChild(td10);

	let td11 = document.createElement('td');
	td11.textContent = wine.winery;
	tr.appendChild(td11);

	table.appendChild(tr);
	deleteUpdate(wid, wine);

}