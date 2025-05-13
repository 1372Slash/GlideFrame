const https = require('https');

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

const req = https.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    try {
      const json = JSON.parse(body.toString());

      // Cek apakah struktur data sesuai
      if (json && json.data && json.data.edge_followed_by && json.data.edge_followed_by.count !== undefined) {
        console.log(`Followers: ${json.data.edge_followed_by.count.toLocaleString()}`);
      } else {
        console.log('Struktur data tidak sesuai atau tidak ditemukan.');
        console.log(JSON.stringify(json, null, 2)); // Debug log
      }

    } catch (error) {
      console.error('❌ Error parsing response JSON:', error.message);
      console.log(body.toString()); // Log data mentah untuk diagnosa
    }
  });
});

req.on('error', function (e) {
  console.error(`❌ Request error: ${e.message}`);
});

req.end();
