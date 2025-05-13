const http = require('https');

const options = {
	method: 'GET',
	hostname: 'instagram-scrapper-posts-reels-stories-downloader.p.rapidapi.com',
	port: null,
	path: '/profile_by_username?username=glideinside',
	headers: {
		'x-rapidapi-key': 'f76d39bf1dmshcba06084df2c4a4p1dd6e7jsnbb5bbfc21d22',
		'x-rapidapi-host': 'instagram-scrapper-posts-reels-stories-downloader.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();