// Lesson 24 — HTTP, JSON & Fetch
// HTTP is a set of rules that allows two systems to communicate over a network.

// Part 1 — Understanding HTTP

// HTTP is a communication protocol. A protocol is simply an agreed-upon
// set of rules that systems follow when communicating.

// Imagine you open an application and want to see your profile.

// Your profile information might be stored in a database on a remote server.
// Your application needs to communicate with that server to retrieve it.
// How?
// Through HTTP.

// The application sends a request. The server receives it,
// processes it, and sends back a response.

// That's the fundamental idea behind HTTP.

// Client: The system initiating a request. For example,
// a mobile app, website, or another backend service.

// Server: The system that receives requests,
// performs the required work, and sends responses.

// One thing to understand: client and server are roles, not necessarily
// separate physical computers. They can even run on the same computer.

/*
What exactly happens when a request is made?
Let's use a concrete example.

Suppose you build a personal finance application.

You have a backend server running at:
    https://api.myfinance.com

It has an endpoint that retrieves a user's transactions:
    https://api.myfinance.com/transactions

Your application wants to retrieve those transactions.

The sequence looks like this:
1. The client initiates a request.
The application requests /transactions.

2. The server receives the request.
The backend identifies which endpoint was requested and which operation is being performed.

3. The server processes the request.
It might authenticate the user, query the database, and retrieve their transactions.

 4. The server creates a response.
It prepares the requested data and an HTTP status code.

5. The client receives the response.
The application reads the response and displays the transactions.
Notice something?

The client doesn't directly access the server's database. It communicates with the backend, and the backend handles database operations.

That's one of the fundamental ideas behind backend development.
*/

// Part 2 — HTTP methods


/*
HTTP methods describe what operation the client wants to perform on a resource.

There are five particularly important methods.
1. GET — Retrieve data
GET is used to retrieve information from a server.

Example:
GET /users

Meaning:
Server, give me the users.

Another example:
GET /users/42

Meaning:
Server, give me the user whose ID is 42.

In JavaScript, you'll use GET requests when retrieving information from APIs.
A GET request should not be designed to modify server data.

2. POST — Create or submit data
POST is commonly used to create a resource or submit data for processing.

Example:
POST /users

Request body:
{
  "name": "Ahad",
  "email": "ahad@example.com"
}

Meaning:
Server, create a new user using this information.

Another example:
POST /payments

This might submit a payment request.

POST isn't exclusively for creating resources. It can also trigger operations or submit information for processing.

3. PUT — Replace a resource
PUT is generally used to replace an existing resource with the supplied representation.

Imagine the server currently has:
{
  "id": 42,
  "name": "Ahad",
  "email": "old@example.com"
}


You send:
PUT /users/42


With:
{
  "name": "Ahad",
  "email": "new@example.com"
}


The intention is to replace the resource with the supplied representation.

Depending on the API, omitted fields may be removed or reset to defaults.

4. PATCH — Partially update a resource
PATCH is used when you want to modify only part of a resource.

Suppose the existing user is:
{
  "id": 42,
  "name": "Ahad",
  "email": "old@example.com",
  "role": "developer"
}


You want to change only the email.

You send:
PATCH /users/42


Body:
{
  "email": "new@example.com"
}


The intended change is only the email.

The name and role remain unchanged.

PUT versus PATCH:
- PUT: Replace the resource representation.
- PATCH: Apply a partial modification.

5. DELETE — Delete a resource
DELETE requests the removal of a resource.

Example:
DELETE /users/42


Meaning:
Server, delete user 42.

The server might respond with:
204 No Content
Meaning the operation succeeded, but there is no response body.


One important backend concept: these methods express intended semantics, but the server determines what actually happens. An API could implement them incorrectly or use a different design.
*/


/*
Part 3 — HTTP status codes
A server doesn't just return data. It also tells the client what happened.

It does this using HTTP status codes.

There are five major categories.
Category	Meaning
1xx	        Informational
2xx	        Successful
3xx	        Redirection
4xx	        Client error
5xx	        Server error

Let's focus on the ones you'll encounter frequently.
1. Successful responses — 2xx
Code	Name	    Meaning
200	    OK	        Request succeeded
201	    Created	    Resource successfully created
202	    Accepted	Request accepted for processing
204	    No Content	Request succeeded, no response body

Examples:
- GET /users → 200 OK
- POST /users → 201 Created
- DELETE /users/42 → 204 No Content
These are common conventions, not guaranteed responses for every API.

2. Client errors — 4xx
These generally mean something was wrong with the request or the client's permissions.
Code	Name	        Meaning
400	    Bad Request	    Invalid request
401	    Unauthorized	Authentication required or invalid
403	    Forbidden	    Not permitted to access this resource
404	    Not Found	    Resource doesn't exist
409	    Conflict	    Request conflicts with current resource state
422	    Unprocessable Content	Request content couldn't be processed

A useful distinction:
401 versus 403
- 401: You haven't successfully authenticated.
- 403: The server understands who you are, but you aren't allowed to perform this operation.
For example, you're logged in, but you try to access an administrator-only endpoint. That's a typical 403 situation.

3. Server errors — 5xx
These indicate that the server failed to successfully handle an apparently valid request.
Code	Name	                Meaning
500	    Internal Server Error	Unexpected server failure
502	    Bad Gateway	            An upstream server returned an invalid response
503	    Service Unavailable	    Server temporarily unavailable
504	    Gateway Timeout	        Upstream server didn't respond in time

Imagine your application requests a user's transactions.

The backend receives the request, but its database connection fails.

The server might return:
HTTP/1.1 500 Internal Server Error


The client should handle that failure gracefully.

Important: A status code tells you the outcome of an HTTP request. It doesn't automatically explain the underlying cause.
*/

/*
Part 4 — JSON
Now we're getting to something you'll use constantly in JavaScript backend development.

1. What is JSON?
JSON stands for JavaScript Object Notation.

It's a lightweight text-based data format used to exchange information between systems.

For example:
{
  "id": 42,
  "name": "Ahad",
  "age": 22,
  "isDeveloper": true,
  "skills": ["JavaScript", "Python", "SQL"]
}

This represents a user and their information.

JSON is widely used in APIs because it's readable, compact, and supported by virtually every modern programming language.

You might already have used JSON while working with Flask.

Here's an important distinction:
JSON is not a JavaScript object.

They look similar, but they are different things.
JavaScript object
const user = {
  id: 42,
  name: "Ahad",
  age: 22,
  isDeveloper: true
};


JSON
{
  "id": 42,
  "name": "Ahad",
  "age": 22,
  "isDeveloper": true
}


Notice the differences:
- JSON property names must use double quotes.
- JSON strings must use double quotes.
- JSON doesn't allow functions.
- JSON doesn't allow undefined.
- JSON doesn't allow comments.
- JSON doesn't allow trailing commas.
This is valid JavaScript:
const user = {
  name: "Ahad",
  greet() {
    console.log("Hello");
  }
};


But it is not valid JSON because JSON cannot represent functions.

JSON is a data format, not a programming language.

2. JSON.stringify()
Suppose you have a JavaScript object:
const user = {
  name: "Ahad",
  age: 22,
  isDeveloper: true
};


You want to convert it into JSON text.

You use:
JSON.stringify()


Example:
const user = {
  name: "Ahad",
  age: 22,
  isDeveloper: true
};

const jsonData = JSON.stringify(user);

console.log(jsonData);
console.log(typeof jsonData);


Output:
{"name":"Ahad","age":22,"isDeveloper":true}
string


Pay attention to this:

JSON.stringify() converts a JavaScript value into a JSON string.

The resulting value is a string, not an object.

Why does this matter?

Because when you send data through an HTTP request, you commonly send JSON text in the request body.

For example:
const user = {
  name: "Ahad",
  age: 22
};

const body = JSON.stringify(user);


Now body contains JSON text that can be transmitted to a server.
Pretty-printing JSON
You can also format JSON with indentation:
const jsonData = JSON.stringify(user, null, 2);

console.log(jsonData);


Output:
{
  "name": "Ahad",
  "age": 22
}


The second argument is a replacer. The third argument controls indentation.

For now, remember the basic form:
JSON.stringify(value)


3. JSON.parse()
Now let's reverse the operation.

Imagine a server sends you this JSON string:
const jsonData = '{"name":"Ahad","age":22}';


This is a string.

You want to work with it as a normal JavaScript object.

Use:
JSON.parse()


Example:
const jsonData = '{"name":"Ahad","age":22}';

const user = JSON.parse(jsonData);

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(typeof user);


Output:
{ name: 'Ahad', age: 22 }
Ahad
22
object


Now you can access its properties like any other JavaScript object.
Stringify versus parse
Method	Conversion
JSON.stringify()	JavaScript value → JSON string
JSON.parse()	JSON string → JavaScript value

Remember this direction. It's important when working with APIs.
The JSON conversion cycle
JavaScript object

{ name: "Ahad" }

JSON.stringify()

JSON string

'{"name":"Ahad"}'

JSON.parse()

JavaScript object again

{ name: "Ahad" }


One more important detail: JSON.parse() throws a SyntaxError if the supplied string isn't valid JSON. That's something you'll need to handle when parsing untrusted JSON manually.
*/

const user = {
    name: "Ahad",
    age: 21,
    isDeveloper: true
};

const jsonData = JSON.stringify(user);

console.log(jsonData);
console.log(typeof jsonData);

console.log();

const jsonData2 = '{"name": "Sia", "age": 22}';
const user2 = JSON.parse(jsonData2)

console.log(user2);
console.log(user2.name);
console.log(user2.age);
console.log(typeof user2);
console.log();

/*
Part 5 — APIs and endpoints

What is an API?
API stands for Application Programming Interface.

In our context, an API is an interface that allows one application to interact with another application or service.

For example, imagine you build a weather application.

You don't have to build your own global weather measurement infrastructure.

You can communicate with a weather service through its API.

Your application sends a request:
GET /weather?city=Lucknow


The service responds with data:
{
  "city": "Lucknow",
  "temperature": 29,
  "condition": "Cloudy"
}


Your application reads that data and displays it.

That's API communication.
What is an endpoint?
An endpoint is a particular URL through which an API exposes a resource or operation.

For example:
https://api.example.com/users
https://api.example.com/products
https://api.example.com/orders


Each endpoint provides access to a particular resource or operation.

Think about your Mini Store project.

A backend might expose:
Endpoint	Purpose
/products	Retrieve products
/products/101	Retrieve a particular product
/orders	Create or retrieve orders
/customers	Manage customers

The combination of HTTP method and endpoint tells the server what operation is being requested.

For example:
GET /products


and
POST /products


use the same endpoint but express different intentions.
API versus HTTP
These aren't interchangeable.
- HTTP is a communication protocol.
- An API is an interface that exposes functionality or data.
- A REST API is an API designed around REST architectural constraints, commonly using HTTP methods and resource-oriented URLs.
You'll study REST API design more deeply when you get into backend development
*/

// Part 6 — Fetch API
// Now we're finally going to write JavaScript that communicates
// with an actual server.
// 17. What is fetch()?
// fetch() is a built-in JavaScript function used to make HTTP requests.

// It returns a Promise that fulfills with a Response object
// when an HTTP response is received.

// In modern Node.js, fetch() is available globally.
// You don't need to install Axios or import a package to use it.

// Let's trace the complete process:
// 1. fetch(url) starts the HTTP request and returns a Promise.
// 2. await fetch(url) gives us the Response object once the response arrives.
// 3. response.json() reads the response body and returns another Promise.
// 4. await response.json() gives us the parsed JavaScript data.
// 5. We can now access properties like user.name and user.email.
async function main() {
    // This initiates an HTTP request.
    // fetch() returns a Promise.
    const response = await fetch(
        "http://jsonplaceholder.typicode.com/users/1"
    );

    // Reading the response with response.json()
    // response.json() reads the response body and parses
    // the JSON data into a JavaScript value.
    const user = await response.json();

    // Accessing the returned data
    console.log("User ID:", user.id);
    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("City:", user.address.city);
    console.log();
}

main();

// Making a POST request using fetch()
async function main2() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Learning JavaScript",
                body: "Learning HTTP and fetch API",
                userId: 1
            })
        }
    );
    const post = await response.json();
    console.log(post);
}

main2();
