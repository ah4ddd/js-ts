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
