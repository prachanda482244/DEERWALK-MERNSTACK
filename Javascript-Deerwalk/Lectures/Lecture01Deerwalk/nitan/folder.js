const fs = require('fs');
fs.mkdir('Folder', (err, data) => {
    if (!err) {
        console.log('Folder created successfully');
    }
})