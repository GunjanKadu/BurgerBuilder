## Burger Builder

An application built to order Delicious Burgers integrated with firebase

## DEMO

## FIREBASE SETUP

        {
  "rules": {
     "ingredients":{
        ".read": "true",
        ".write":"true"
      },
    "orders":{
        ".read": "auth!=null",
        ".write":"auth!=null",
          ".indexOn":["userId"]
      }
  }
}

## Technology Stack

    React
    Redux
    React Router
    Thunks
    Hooks,
    Firebase
