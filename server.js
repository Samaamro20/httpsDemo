var https = require('https')
var pem = require('pem')

  pem.createCertificate({ days: 5, selfSigned: true }, function (err, keys) {
  if (err) {
    console.log("Error",err);
  }
  https.createServer({ key: keys.serviceKey, cert: keys.certificate }, function (req, res) {
      res.end('<h1> Done </h1>');
  }).listen(3000,(err,res)=>{
    if(err)
    throw err;
    console.log('this website work on port 3000');
  })
})
