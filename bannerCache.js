/*	The home of the Media Team's banners.
	The cache is composed of Pure JavaScript Objects. They are the first level of indentation.
	Each object is composed of attributes. They are the second level of indentation.
	An object can have any number of attributes of any type.
	Each attribute is written in the form of a Key-Value pair.
	They key is the thing in quotes "" before the colon ':'. Call it whatever you want.
	The value is the thing after the colon ':'. It can be a true/false value, a number, a string, and even another JavaScript object!
	For our purposes, give each banner object a name, a url attribute and an expiration attribute.
	We are storing the expiration date as an ISO String. This makes it easy to use with JavaScript and other programming languages.
*/
let bannerCache = {
	"default": {
		"url": "http://slwordpress.rutgers.edu/studentaffairs2016/wp-content/uploads/sites/119/2016/05/LM2-S16_Student-Affairs-Summer-Gathering-e1464726669543.jpg"
	},
	"latest": {
		"url": "https://slwordpress.rutgers.edu/studentaffairs2016/wp-content/uploads/sites/119/2018/02/2018-survey-banner.jpg",
		"expiration": "2018-07-09T17:26:58.340Z"
	},
	"health": {
		"url": "http://slwordpress.rutgers.edu/studenthealth/wp-content/uploads/sites/139/2017/12/home-bannerjpg.jpg",
		"expiration": "2018-07-09T17:26:58.340Z"
	},
	"sample-1": {
		"url": "#",
		"expiration": "2018-07-09T17:26:58.340Z"
	},
	"extra": {
		"url": "#",
		"expiration": "2018-07-09T17:26:58.340Z"
	},
	"template": {
		"url": "#",
		"expiration": "2018-07-09T17:26:58.340Z"
	},
	"new-banner-2019": {
		"url": "#",
		"expiration": "2019-11-02T00:26:58.340Z"
	}
} 