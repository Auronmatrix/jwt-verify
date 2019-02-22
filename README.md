## JWA verify JWT Signatures

Simple script to verify that `PEM` files are valid pairs and can be used by `jwa` for `jwt` signatures. 

### Getting Started

Drop your `private.pem` & `public.pem` files in the keys folder

Run:

```
npm i
node index.js
```

### Warning

Do not commit your private/public keys to any git repo. Make sure they are excluded by the .gitignore (already ignores .pem files in the keys directory)