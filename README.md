# auth-server-js

## Containerize 

```bash
docker build -t auth-server .
docker run -d -p 3010:3000 --name local-auth auth-server 
```