## POST localhost:3001/user/login

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

## POST localhost:3001/user/register

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
            "price": 2.200000047683716,
            "picture": "http://localhost:3001/images/Skol Lata 350ml.jpg"
        },
        {
            "name": "Heineken 600ml",
            "productId": 2,
            "price": 7.5,
            "picture": "http://localhost:3001/images/Heineken 600ml.jpg"
        },
        {
            "name": "Antarctica Pilsen 300ml",
            "productId": 3,
            "price": 2.490000009536743,
            "picture": "http://localhost:3001/images/Antarctica Pilsen 300ml.jpg"
        },
        {
            "name": "Brahma 600ml",
            "productId": 4,
            "price": 7.5,
            "picture": "http://localhost:3001/images/Brahma 600ml.jpg"
        },
        {
            "name": "Skol 269ml",
            "productId": 5,
            "price": 2.190000057220459,
            "picture": "http://localhost:3001/images/Skol 269ml.jpg"
        },
        {
            "name": "Skol Beats Senses 313ml",
            "productId": 6,
            "price": 4.489999771118164,
            "picture": "http://localhost:3001/images/Skol Beats Senses 313ml.jpg"
        },
        {
            "name": "Becks 330ml",
            "productId": 7,
            "price": 4.989999771118164,
            "picture": "http://localhost:3001/images/Becks 330ml.jpg"
        },
        {
            "name": "Brahma Duplo Malte 350ml",
            "productId": 8,
            "price": 2.7899999618530273,
            "picture": "http://localhost:3001/images/Brahma Duplo Malte 350ml"
        },
        {
            "name": "Becks 600ml",
            "productId": 9,
            "price": 8.890000343322754,
            "picture": "http://localhost:3001/images/Becks 600ml"
        },
        {
            "name": "Skol Beats Senses 269ml",
            "productId": 10,
            "price": 3.569999933242798,
            "picture": "http://localhost:3001/images/Skol Beats Senses 269ml"
        },
        {
            "name": "Stella Artois 275ml",
            "productId": 11,
            "price": 3.490000009536743,
            "picture": "http://localhost:3001/images/Stella Artois 275ml"
        }
    ]
}

{
    "status": "failed",
    "code": "Código do erro",
    "message": Mensagem do erro"
}

```

## PATCH localhost:3001/user/profile

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

## POST localhost:3001/products/checkout

```
req.body

Lembrar de passar o token no auth
{
    "street": "rua 1",
    "streetNumber": 12,
    "products": [
        {
            "id": 1,
            "quantity": 5
        },
        {
            "id": 3,
            "quantity": 7
        }
    ]
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

## GET localhost:3001/user/Orders

Lembrar de passar o token no auth

response
{
    "status": "success",
    "orders": [
        {
            "orderId": 2,
            "total": 15.39,
            "day": "15",
            "month": "11"
        },
        {
            "orderId": 3,
            "total": 10.98,
            "day": "08",
            "month": "12"
        }
    ]
}

{
    "status": "failed",
    "code": "Código do erro",
    "message": Mensagem do erro"
}

## GET localhost:3001/user

Lembrar de passar o token no auth

response
{
    "status": "success",
    "name": "Pedro",
    "email": "pedro@gmail.com"
}

{
    "status": "failed",
    "code": "Código do erro",
    "message": Mensagem do erro"
}

## GET localhost:3001/user/orders/:id

Lembrar de passar o token no auth

response
{
    "status": "success",
    "order": {
        "orderId": 2,
        "day": 15,
        "month": 10,
        "products": [
            {
                "name": "Skol Lata 350ml",
                "qty": 6,
                "price": 2.200000047683716,
                "total": 13.200000286102295
            },
            {
                "name": "Skol 269ml",
                "qty": 1,
                "price": 2.190000057220459,
                "total": 2.190000057220459
            }
        ],
        "total": 15.390000343322754
    }
}

{
    "status": "failed",
    "code": "Código do erro",
    "message": Mensagem do erro"
}