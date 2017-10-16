var slideIndex = 0;

function getSlidePercentageOffset(slideIndex) {
	var offsets = [
		0, 
		-11.13, 
		-18.96, 
		-30.7, 
		-42.33, 
		-54, 
		-66.2, 
		-83.31, 
		-95.46
	];
	var slides = [
		{
			'offset': 0,
			'title':'we are breaking our vow of silence',
			'title-class-name':'top-left',
			'footer-text': 'In Juanary 2011, after a decade of digital, we opened the doors to our temple. Follow our noble eightfold path to digital enlightenment here.'
		},
		{
			'offset': -11.13,
			'title':'talent is given true skill is earned',
			'title-class-name':'left',
			'footer-text': 'Step 1 out of 8 on the path to digital enlightenment.'
		},
		{
			'offset': -18.96,
			'title':'be flexible to change and sturdy in conviction',
			'title-class-name':'left',
			'footer-text': 'Step 2 out of 8 on the path to digital enlightenment'
		},
		{
			'offset': -30.7,
			'title':'use many skills yet work as one',
			'title-class-name':'right',
			'footer-text': 'Step 3 out of 8 on the path to digital enlightenment'
		},
		{
			'offset': -42.33,
			'title':'to master anything find interest in everything',
			'title-class-name':'right',
			'footer-text': 'Step 4 out of 8 on the path to digital enlightenment'
		},
		{
			'offset': -54,
			'title':'individuals flourish if culture and wisdom are shared',
			'title-class-name':'top-left',
			'footer-text': 'Step 5 out of 8 on the path to digital enlightenment'
		},
		{
			'offset': -66.2,
			'title':'train for perfection but aim for more',
			'title-class-name':'top-left',
			'footer-text': 'Step 6 out of 8 on the path to digital enlightenment'
		},
		{
			'offset': -83.31,
			'title':'take pride in your work but do not seek praise',
			'title-class-name':'left',
			'footer-text': 'Step 7 out of 8 on the path to digital enlightenment'
		},
		{
			'offset': -83.31 ,
			'title':'temporary sacrifice brings lasting results',
			'title-class-name':'left',
			'footer-text': 'Step 8 out of 8 on the path to digital enlightenment'
		},
		{
			'offset': -95.46,
			'title':'become a monk',
			'title-class-name':'top-right',
			'footer-text': 'Intrested in join our monastery? Check out our current openings'
		}
	];
	return slides[slideIndex]['offset'];
}

function goToSlide(index) {
	slideIndex = index;
	document
		.getElementById('scene')
		.style
		.transform = `translateX(${getSlidePercentageOffset(slideIndex)}%)`;
}

function goToNextSlide() {
	goToSlide(slideIndex +1); 
}

function goToPrevSlide() {
	goToSlide(slideIndex -1); 
}

function setSlideData(index) {
	
}