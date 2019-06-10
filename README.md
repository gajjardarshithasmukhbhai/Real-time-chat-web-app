# Real time chat web app
## MVC architecture and socket programming
```text
in this webapp is fully bashed on MVC(model,view,controller base web-app) 
architecture with real time chating features like socket io :-)
```
## Start Project
```text
start project 
step:1
	npm install
step:2
	localhost:5060
```
## Packages
| npm package 			    | command		     			  | application                          |
| --------------------------------- | ------------------------------------------- | ------------------------------------ |
| anime     	    		    | npm install animejs                         | animation                            |
| bcryptjs   	     		    | npm install bcryptjs                        | password encryption                  |
| csurf     	     		    | npm install csurf                           | csrf token	                         |
| express-session    		    | npm install express-session                 | session with cookie                  |
| font-awesome       		    | npm install font-awesome                    | font styling                         |
| nodemailer-sendgrid-transport     | npm install nodemailer-sendgrid-transport   | mail sending third party service     |
| toastr   			    | npm install toastr                          | notification beautiful               |
| body-parser     		    | npm install body-parser                     | take data                            |
| mongodb    			    | npm install mongodb                         | mongodb database driver              |
| Mdbootstrap   	            | npm install mdbootstarp                     | this bootstrap use for modern look design|
| socket io	  	            | npm i socket.io	                          | this socket basically use for real time chat web-app with user|

**in this web-app i learn lot**
---
```
in this web-app my main priority not only making webApp.But Also security si
I give security features like 
->session hijacking
->CSRF protection
->Encrypted protection system
->real time chat system
```
## web socket

```text
->communication  between client and server
->real time data-flow
->data flows both ways
->web-socket is always be open so client to server data send very real time
```
![Drag Racing](https://www.iro.umontreal.ca/~pift1025/bigjava/Ch24/images/sockets.png)

## application of web-socket

```text
->real time to-do web app or android app
->real time data-visualization
->collobrative code editing
->live text and sports features
->Drag and Drop features give to the user
```

## socket programming is started

**important things**
```text
-->	socket programming is occur in both side in client and server so user connection in both side
-->	In socket programming the socket Id is imporatnt because without socket id you unable to fetch Data through user
-->	In socket programming the socket Id is always be changed so you refresh so that time it change because it real time @pp
-->	In client side cdn of socket is important

```
## socket programming steps:

**step 1:**
import the socketIo the package through require like ex.
``javascript
var socket=require('socket.io');
``
<br>
**step 2:**
in socket the server side set-up is imporatant thing
so setup the server so you set-up just like that
```javascript
var server=app.listen(4040,()=>{
	console.log('i am connected');
});
var io=socket(server);
```
**Note:**
when the server side setup the socket so that time server port number is important to set-up all of thing just like above 





















