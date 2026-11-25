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
