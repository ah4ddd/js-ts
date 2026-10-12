# Mini Store

Mini Store is a small JavaScript project that models the core flow of an online store:

```text
Products -> Customer -> Cart -> Order -> Checkout
```

It uses only JavaScript fundamentals from Lessons 1-20: variables, functions, arrays, objects, classes, modules, array methods, closures, `this`, and error handling.

## How to Run

Run the project with Node.js:

```bash
node app.js
```

Or use the npm script:

```bash
npm start
```

The program prints a complete terminal report showing inventory checks, cart items, totals, discount, order status, handled errors, and stock after checkout.

## Project Files

- `app.js` coordinates the demo flow, checkout, handled errors, and console report.
- `product.js` defines the `Product` class, including restock and sell behavior.
- `cart.js` defines the `Cart` class, including adding products, removing products, totals, and item counts.
- `order.js` defines the `Order` class, including order status changes and summaries.
- `customer.js` defines the `Customer` class.
- `data.js` stores hardcoded products, customers, and inventory helper functions.
- `discount.js` creates discount calculators using a closure.
- `errors.js` defines custom error classes for invalid store operations.
- `package.json` enables ES modules and provides the `npm start` script.

## Features

- Multiple product instances and an inventory array
- Product search, category filtering, and price filtering
- Cart add/remove behavior with validation
- Stock checks before checkout
- Totals calculated with array methods
- Discount system implemented with a closure
- Order creation and confirmation
- Intentional error handling examples with `try/catch`
- Clean console output

## Notes

This project intentionally uses hardcoded data and does not use user input, HTTP, databases, external packages, or async JavaScript.
