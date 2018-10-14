document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('menu-toggle').addEventListener('click', function() {
		let dropdown = document.getElementsByClassName('top-bottom')[0];
		if (dropdown.classList.value.indexOf('close-nav') > -1) {
			dropdown.classList.remove('close-nav');
		} else {
			dropdown.classList.add('close-nav');

		}
		
	});
	
	
});

var navLiTag = document.querySelectorAll('nav>li');

for (let liTags of navLiTag) {
	liTags.addEventListener('click', function() {
		if (document.documentElement.clientWidth < 768) {
			if (this.getElementsByClassName('drpdown-mark')[0].classList.value.indexOf('sub-nav') > -1) {
			// this.getElementsByClassName('drpdown')[0].classList.add('sub-nav1');
			this.getElementsByClassName('drpdown-mark')[0].classList.remove('sub-nav');
			
		}
		if (this.getElementsByClassName('drpdown-mark')[0].classList.value.indexOf('sub-nav1') > -1) {
			this.getElementsByClassName('drpdown-mark')[0].classList.remove('sub-nav1');
			this.getElementsByClassName('drpdown-mark')[0].classList.add('sub-nav');
		} else {
			var drpdownMarkList = document.getElementsByClassName('drpdown-mark');
			for (let drpdown of drpdownMarkList) {
				drpdown.classList.remove('sub-nav1');
				drpdown.classList.add('sub-nav');
			}
			this.getElementsByClassName('drpdown-mark')[0].classList.remove('sub-nav');
			this.getElementsByClassName('drpdown-mark')[0].classList.add('sub-nav1');
		}

		
	}
});
}


