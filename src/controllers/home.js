const path = require('path');
exports.home = (req, res) =>{
    res.sendFile('/home/ryan/Documentos/Nodemailer/src/views/index.html')
}