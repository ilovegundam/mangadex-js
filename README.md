<h1 align="center">mangadex-js</h5>
<h4 align="center">Convenient access to the <a href="" target="_blank">MangaDex</a> API</h4>
<p align="center">
    <a href="#installation">Installation</a> &nbsp;&bull;&nbsp;
    <a href="#usage">Usage</a> &nbsp;&bull;&nbsp;
    <a href="#documentation">Documentation</a> &nbsp;&bull;&nbsp;
    <a href="#issue">Issue?</a>
</p>
<div align="center">

  <a href="https://www.npmjs.com/package/mangadex-js">![npm](https://img.shields.io/npm/v/mangadex-js)</a>
  <a href="https://github.com/ilovegundam/mangadex-js">![commit](https://img.shields.io/github/last-commit/ilovegundam/mangadex-js/main)</a>

</div>

## Installation

```sh
npm install mangadex-js
```

## Usage

<details>
  <summary>Authentication</summary>

> 
MangaDex API authentication is a work-in-progress.

In addition, mangadex-js does not support <a href="https://api.mangadex.org/docs/02-authenticationpersonal-clients/">personal client authentication</a> as this feature is currently being worked on.

If you would still like to make authenticated requests, follow the instructions below.

```js
// Set access token
// This will set the Authorization header to
// Bearer <YOUR_TOKEN> for all future requests
client.setAccessToken("<YOUR_TOKEN>");

// Retrieve access token
const token = client.getAccessToken();
```

</details>

<details>
  <summary>Resources</summary>

> 
The `MangaDex` class exports all resources found in the <a href="https://api.mangadex.org/docs/redoc.html">ReDoc API documentation</a>.

```js
const client = new MangaDex();

// ApiClient: https://api.mangadex.org/docs/redoc.html#tag/ApiClient
client.ApiClient.list();
client.ApiClient.create();
client.ApiClient.get();
client.ApiClient.edit();
client.ApiClient.delete();
client.ApiClient.getSecret();
client.ApiClient.regenerateSecret();
```

</details>

## Documentation

View MangaDex API documentation <a href="https://api.mangadex.org/docs/">here</a>

## Issue

This repository is activley being improved upon. If you face and issues, feel free to <a href="https://github.com/ilovegundam/mangadex-js/issues/new">open an issue here!</a>

## Todo

- [ ] Implement MangaDex <a href="https://api.mangadex.org/docs/02-authentication/personal-clients/">personal client authentication</a>
- [ ] Improve HttpClient and MangaDex tests
- [ ] Add Resource tests
