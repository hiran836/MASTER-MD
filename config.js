const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "put your season id",
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.ironman.my.id/i/5b21iy.jpg",
SUDO_NB: process.env.SUDO_NB || "917020728211",
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: "true"
};

© 𝚸𝚯𝐖𝚵𝚪𝚵𝐃 𝚩𝐘 𝚪𝐔𝐒𝚮 𝚳𝚫𝐒𝚻𝚵𝚪 💪