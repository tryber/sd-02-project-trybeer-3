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