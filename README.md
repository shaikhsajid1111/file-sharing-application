<h1>Filereal</h1>
Filereal is an application that lets you share up to 10 files per 30 minutes anonymously.

<br>
<hr>
<h2>Installation: </h2>
<h3>Server setup: </h3>
<li>Open terminal in project directory
</li>
 <li>Install dependecies using command <code>npm install</code> or <code>yarn install</code> </li>
<li> create <code>.env</code> file on project directory and inside the same file write these variables,
<br/>
<code>
PORT=3500 <br/>
APP_BASE_URL=http://localhost:3500 <br/>
MONGO_URL=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]] <br/>
</code>
<li>At the same level of directory, start the server using the command <code>npm start</code> or <code>nodemon</code>. </li>
<br>
<h3>Client setup:</h3>

<li>Now, to run the client, open <code>client/</code> directory in terminal.</li>
 <li>Install dependecies using command <code>npm install</code> or <code>yarn install</code>.</li>
<li> create
<code>.env</code> file in <code>client/</code> directory and inside the same file write these variables,
<code>
</br>
REACT_APP_API_BASE_URL=http://localhost:3500 <br/>
</code>
<li>Inside the the same <code>client/</code> directory, start the client application with the command <code>npm start</code> and open <a href="http://localhost:3000"> http://localhost:3000 </a> to view it in your browser.</li>

<hr>

<h2>Tech</h2>
<li>Express</li>
<li>Mongoose</li>
<li>Multer</li>
<li>UUID</li>
<li>React</li>
<li>Bootstrap</li>

<hr>


<h2>Screenshot</h2>
<img src="https://i.imgur.com/Klu5r7O.jpg" />

<br>
<hr>
<h2>Credits</h2>
<li><a href="https://www.deviantart.com/yuki-neh/art/Yoshino-and-Kurumi-Date-A-Live-Minimalist-719372219"> Background Image </a> used in this application belongs to <a href="https://www.deviantart.com/yuki-neh">Yuki-Neh</a> </li>
<li>Favicon used in this application belongs to <a href="https://fontawesome.com/">Font-Awesome</a></li>
<hr>
<h2>LICENSE</h2>
MIT

