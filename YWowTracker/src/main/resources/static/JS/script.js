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

	document.wineById.wineById.addEventListener('click', function(event) {
		event.preventDefault();
		var wineId = document.wineById.wineId.value;
		if (!isNaN(wineId) && wineId > 0) {
			getWine(wineId);
		}
	});
	
	document.addWine.addWine.addEventListener('click', function(e){
		e.preventDefault();
		console.log('in add a wine');
		addOne(); 
	});
	
	

}

function addOne() {
	let form = document.addWine; 
	console.log('in the function create one');
	if(form.name.value !==''){
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
		}
		
		let xhr = new XMLHttpRequest();
		xhr.open('POST','api/wine',true); 
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status < 400){
				wineC = JSON.parse(xhr.responseText);
				console.log('here i am');
				cAll();}
//			} else {
//				let div = document.getElementById('addWine');
//				div.textContent = 'Unable to process, please try again';
//			}
		};
		xhr.send(JSON.stringify(wineC)); 
	}
	else {
		let div = document.getElementById('createData');
		div.textContent = 'Missing Data, Please Try Again'; 
	}
	
};

function cAll() {
	console.log("sea all was clicked");

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

function getWine(wineId) { // get by // ID
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "/api/wine/" + wineId);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			let wine = JSON.parse(xhr.responseText);
			displayWine(wine);

		} else {

			console.log('No WINE');
			let err = document.getElementById("outputById");

			err.textContent = 'Wine not found';
		}
	};
	xhr.send(null);
}


function deleteWine(wid) {
	console.log('deleting wine')
	let xhr = new XMLHttpRequest();
	xhr.open("DELETE", "/api/wine/" + wid);
	xhr.onreadystatechange = function() {
		if (xhr.readyState ===4 && xhr.status < 400) {
			let wine2 = JSON.parse(xhr.responseText);
		} else {

			console.log('No WINE');
			let err = document.getElementById("outputById");

			err.textContent = 'Wine not found';
		}
		let deleteText = document.getElementById("DeleteW"); 
	};
	xhr.send(null);
} 

function deleteUpdate(wid) {

	var form = document.createElement('form');
	form.name = 'Delete this Wine?';

	var submit = document.createElement('input');
	submit.name = 'submit';
	submit.type = 'submit';
	submit.value = 'DELETE';

	submit.addEventListener('click', function(e) {
		e.preventDefault();
		deleteWine(wid);
		form.reset();
	});

	form.appendChild(submit);
	document.body.appendChild(form);
}




function displayWineAll(wines) { // output all

	let body = document.getElementById('seeAll');
	outputById.textContent = '';
	
	let form = document.createElement('form');
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
		document.body.appendChild(form);

	}
}

function displayWine(wine) { // output the wine with fields by // IDEA:
	let wid = wine.id; 

	let body = document.getElementById('outputById');
	outputById.textContent = '';
	
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
	deleteUpdate(wid);
	
}