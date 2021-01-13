# UUID to Short-UUID and back converter
>#### Converts uuid to short-uuid and vice versa
>#### run using node v10.12.0

## How to use
### clone repository and cd into directory
```
git clone https://github.com/jiroquijano/uuid-shortid-uuid_converter
cd uuid-shortid-uuid_converter
```
### install dependencies
```
npm i
```

#### Commands Available
* Generate random UUID
```
node index.js gen-uuid
```
* Generate random short-uuid
```
node index.js gen-shortuuid
```
* Convert short-uuid to uuid
```
node index.js short-uuid --short=<YOUR SHORT-UUID STRING>
```
* Convert uuid to short-uuid
```
node index.js uuid-short --uuid=<YOUR UUID STRING>
```
