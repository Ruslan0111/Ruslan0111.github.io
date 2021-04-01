//Sidebar

function handleSidebar() {
	let list = document.getElementsByClassName('sidebar__list');

	for (let i of list) {
		i.addEventListener('click', function(event) {
			if (!event.target.closest('.sidebar__link')) return;

			let activeElement = document.querySelector('.active');

			activeElement.classList.remove('active');
			event.target.closest('.sidebar__link').classList.add('active');
		})
	}
}

//Sidebar

// Google

function googleSignIn() {
	if (!localStorage.getItem('user')) {
		document.location.href = './signInGoogle.html';
	} else {
		let user = JSON.parse(localStorage.getItem('user'));

		let userName = document.getElementById('userName');
		let userImage = document.getElementById('userImage');

		userName.innerHTML = user.name;
		userImage.style.backgroundImage = `url(${user.image})`
	}
}

function googleSignOut() {
	let confirmation = confirm("Do you really want to log out?");
	
	if(confirmation) {
		localStorage.removeItem('user');
		googleSignIn();
	}
}

// Google

window.onload = function() {
	googleSignIn();
	handleSidebar();

	let signOutBtn = document.getElementById('signOut');
	signOutBtn.addEventListener('click', googleSignOut);

	// Chart js
	saveLocalChartData()
	const chart = createChart('myChart');
	setChartLabel(chart, JSON.parse(localStorage.getItem('chartData')).year.labels);
    setChartDataset(chart, JSON.parse(localStorage.getItem('chartData')).year.datasets);
    setInfo(JSON.parse(localStorage.getItem('chartData')).year)
	addCardsHandleFunction(chart);
	// Chart js
}