<h1>Bookish parakeet</h1>
bookish-parakeet is a file-sharing API

<br>
<hr>
<h2>Installation: </h2>
 <li>Install dependecies with <code>npm install</code> or <code>yarn install</code> </li>
<li>Open terminal in project directory and run command <code> npm start </code> or <code> nodemon </code> to start the project.
<li> create <code>.env</code> on project directory and inside the same file insert,
<br>
<code> 
PORT=3500 </br>
APP_BASE_URL=http://localhost:3500 </br>
MONGO_URL=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]] </br>
</code>
</li>

<hr>

<br>
<h2>How to use?</h2>
<table>
<tr>
<td>
Uploading file
</td>
<td>
Make POST request to http://localhost:3500/uploadfile with a file with parameter name as "file"
</td>
<td>
Response will be JSON containing the URL for the file
</td>
</tr>
<tr>
<td>
Retrieving the file
</td>
<td>
Make a GET request to the file URL that has been given after POST request
</td>
<td>
Response will be in JSON format containing the download link and when that file will expire.
</td>
</tr>
<tr>
<td>
Downloading the file
</td>
<td>
Make a GET request to the URL that has been given after retrieving the file information.
</td>
<td>
Downloads the file.
</td>
</tr>
</table>


<br>
<hr>

<h2>Tech:</h2>
<li>Express</li>
<li>Mongoose</li>
<li>Multer</li>
<li>UUID</li>
<br>
<hr>

<h2>LICENSE</h2>
MIT

