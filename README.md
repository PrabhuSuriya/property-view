
# Property View

Property is a simple web app to list the properties fetched from a REST api in list and map view. This is being developed as part of take-home assignment.


## Features

- Material design
- Split view for List and Map
- Filter
- Info window for the properties on the map
- ngrx for reactive state management
- Pure components and presentation components


## Run Locally

Run `npm start` for a dev server. Navigate to `http://localhost:3500/`. The application will automatically reload if you change any of the source files. Proxy is configured to hit the api server bypassing CORS.

Clone the project

```bash
  git clone https://github.com/PrabhuSuriya/property-view.git
```

Go to the project directory

```bash
  cd property-view
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

View the app at http://localhost:3500/


## Deployment
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/property-view` directory.

The code is hosted in Github and set up for Continuous Deployment (from master) using Netlify.
The deployed app can be viewed at

https://prop-view.prabhusuriya.com

https://prop-view.netlify.app

## Tech Stack

**Client:** Angualar 14

1. primeNG - for UI components
1. primeFlex - for CSS utilities and layout
2. primeIcons - for icons
3. ngrx - for reactive state management
4. @angular/google-maps - for map view

**Server:** REST API


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Authors

- [@PrabhuSuriya](https://github.com/PrabhuSuriya)


## Demo

https://prop-view.prabhusuriya.com

https://prop-view.netlify.app

