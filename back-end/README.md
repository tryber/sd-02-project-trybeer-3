## POST localhost:3001/login

```
body:
{
    "email": "pedro@gmail.com",
    "password": "123456"
}

responses:
{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGVkcm8iLCJlbWFpbCI6InBlZHJvQGdtYWlsLmNvbSIsInJvbGUiOiJjbGllbnQiLCJpYXQiOjE1OTU2MTMwNDgsImV4cCI6MTU5NTYxNDg0OH0.LX0YJPVYl3oG5adXN6Pvd2qvhgsYWXfbYP13NIrXyNw",
    "name": "Pedro",
    "email": "pedro@gmail.com",
    "role": "client"
}

{
    "status": "failed",
    "code": "unauthorized",
    "message": "User not found or wrong password"
}

{
    "status": "failed",
    "code": "invalid_data",
    "message": "Missing fields"
}

```

## POST localhost:3001/register

```
body:
{
    "email": "pedro3@gmail.com",
    "password": "123456",
    "name": "Pedro Henrique",
    "admin": true
}

response:
{
    "status": "success",
    "user": {
        "name": "Pedro Henrique",
        "password": "123456",
        "id": 7,
        "email": "pedro3@gmail.com",
        "role": "admin"
    }
}

{
    "status": "failed",
    "code": "Código do erro",
    "message": Mensagem do erro"
}
```

## GET localhost:3001/products

```
response:
{
    "status": "success",
    "products": [
        {
            "name": "Skol Lata 350ml",
            "productId": 1,
            "price": 2.200000047683716
        },
        {
            "name": "Heineken 600ml",
            "productId": 2,
            "price": 7.5
        },
        {
            "name": "Antarctica Pilsen 300ml",
            "productId": 3,
            "price": 2.490000009536743
        },
        {
            "name": "Brahma 600ml",
            "productId": 4,
            "price": 7.5
        },
        {
            "name": "Skol 269ml",
            "productId": 5,
            "price": 2.190000057220459
        },
        {
            "name": "Skol Beats Senses 313ml",
            "productId": 6,
            "price": 4.489999771118164
        },
        {
            "name": "Becks 330ml",
            "productId": 7,
            "price": 4.989999771118164
        },
        {
            "name": "Brahma Duplo Malte 350ml",
            "productId": 8,
            "price": 2.7899999618530273
        },
        {
            "name": "Becks 600ml",
            "productId": 9,
            "price": 8.890000343322754
        },
        {
            "name": "Skol Beats Senses 269ml",
            "productId": 10,
            "price": 3.569999933242798
        },
        {
            "name": "Stella Artois 275ml",
            "productId": 11,
            "price": 3.490000009536743
        }
    ]
}

{
    "status": "failed",
    "code": "Código do erro",
    "message": Mensagem do erro"
}

```

## PATCH localhost:3001/profile

```
req.body

Lembrar de passar o token no auth
{
    "name": "Pedro Henrique",
}

response
{
    "status": "success"
}

{
    "status": "failed",
    "code": "Código do erro",
    "message": Mensagem do erro"
}
```

## POST localhost:3001/checkout
