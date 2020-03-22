## Burger Builder

An application built to order Delicious Burgers integrated with firebase

## DEMO

https://burgerbuilder-752ae.firebaseapp.com

## FIREBASE RULES FOR QUERY AND AUTHENTICATION

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
