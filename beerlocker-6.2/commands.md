npm install bcrypt-nodejs body-parser ejs express express-session mongoose oauth2orize passport passport-http passport-http-bearer passport-local --save

client1:
{
    "_id" : ObjectId("56bb39b29f7c26b00b892a8e"),
    "userId" : "56bb2c4d7c64e64c1a7668f7",
    "secret" : "mySecret",
    "id" : "myId",
    "name" : "navigation server",
    "__v" : 0
}

{
    "_id" : ObjectId("56bb39d29f7c26b00b892a8f"),
    "userId" : "56bb2c4d7c64e64c1a7668f7",
    "secret" : "test",
    "id" : "test",
    "name" : "test other server",
    "__v" : 0
}

code
{
    "_id" : ObjectId("56bb4993b4cd94ec26223d2e"),
    "value" : "iE1GzLPoaRiJirNO",
    "clientId" : "56bb39b29f7c26b00b892a8e",
    "redirectUri" : "http://localhost:3000",
    "userId" : "56bb2c4d7c64e64c1a7668f7",
    "__v" : 0
}


// json code for token: 
{
    "code" : "iE1GzLPoaRiJirNO",
    "grant_type" : "authorization_code",
    "redirect_uri" : "http://localhost:3000"
}

{
    "code" : "qQ13me01nlriCo26",
    "grant_type" : "authorization_code",
    "redirect_uri" : "http://localhost:3000"
}



// So why did we get a 404? This is part of the tutorial where we are hacking things together a bit. 
// Normally with OAuth2 you would have an endpoint in the application requesting access to a user’s account. 
// That is the query string redirect_uri that we supplied. So when a user grants access, that URI is requested and passed 
// the authorization code. This then allows the requesting application to exchange that code for an access token.



//http://localhost:3000/api/oauth2/authorize?email=jens&pass=test&client_id=sec&response_type=code&redirect_uri=http://localhost:3000
//http://localhost:3000/api/beers/?email=jens&pass=test
http://localhost:3000/api/oauth2/authorize?client_id=sec&response_type=code&redirect_uri=http://localhost:3000



http://localhost:3000/api/oauth2/authorize?client_id=this_is_my_id&response_type=code&redirect_uri=http://localhost:3000