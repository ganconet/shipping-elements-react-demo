# Shipping Elements React Example

An example implementation of [Shippo's Shipping Elements](https://goshippo.com/shipping-elements/) in React using [Create React App](https://github.com/facebook/create-react-app).

For more information on Shippo's Shipping Elements, see the [Shipping Elements documentation](https://docs.goshippo.com/docs/shippingelements/).

## Overview

The Shipping Elements SDK is installed at [public/index.html](public/index.html) and with the bulk of the implementation in [src/App.js](src/App.js). When running the application you will be prompted to enter an authentication token. You can use a session token from our [authz endpoint](https://docs.goshippo.com/docs/shippingelements/auth/#authorization) or an API token. If you do not have a Shippo account, you can sign up for one [here](https://goshippo.com/join/).

View the live demo of this repository at [https://goshippo.github.io/shipping-elements-react-demo/](https://goshippo.github.io/shipping-elements-react-demo/)

## Development
This project requires [Node](https://nodejs.org/en).

To run this project in your local system follow these steps.
1. Clone or download this repository
2. In the project directory run the following command to download the project dependencies
```
npm install
```
3. Run the following command to run the application in development mode
```
npm start
```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

The page will reload if you make edits.
You will also see any lint errors in the console.
