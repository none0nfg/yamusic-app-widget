import YaMApi from 'yandexmusappapi';
import * as http from 'http';
import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const host = '0.0.0.0';
const port = 1337;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const yaapi = new YaMApi();
yaapi.setYandexPath("/logs");

const requestListener = async function (req, res) {
	if (req.url == "/") {
		fs.readFile(__dirname + "/index.html")
		.then(contents => {
            		res.setHeader("Content-Type", "text/html");
            		res.writeHead(200);
            		res.end(contents);
        	})
	}
	if (req.url == "/data") {
		await yaapi.updateSong()
		const song = yaapi.getSong()
		if (!song.img) {
			song.img = "";	
		}
		const data = { name: song.name, author: song.author, img: "https://"+song.img }
		res.end(JSON.stringify(data))
	}
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});