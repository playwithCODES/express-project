   ## Layered ARchitecture
1.API Layer
  a.Routes
  -Handle the routes/endpoints
  b.Controllers
  -Handle requests and responses
  c.Middlewares
  -Handle requests and responses
  -Logging, Auth

2.Business Logic Layer
  a.Services














  ## JSON
  1.JSON data lai Javascript bujhney banaunu xa vaney tyo bela JSON.parse() garnu parxa (JSON lai Javascript ma convert garnu xa vaney)
  2.Javascript object ma xa teslai JSON ma convert garnu xa vaney JSON.stringify(Javascipt lai JSON ma convert garnu xa vaney)

  ## Mongo DB
    -Non Relational Database
    -Data are stored in collections & documents
    -Database:Main Container, where all collection of data are store.
    -Collection:Equivalent to table of relational database
    -Document:Equivalent to Row
    -Field:Equivalent to Column

  ## Tools used in MONGO DB
   - Mongo DB compass(locally)
   - MongoDB Atlas(Remote)

  ## Mongo DB Commands
    -show dbs->show list of databases


  ## Encryption
   - Encryption:Converting readable text to cipher text
   - for ex.:hello =>hjgiughiluhiuhiuuij

   - Decryption: Converting cipher text to readable form   
   - for ex.:hjgiughiluhiuhiuuij=>hello


   ### Types
   - Symmetric:Same key is used for encryption and decryption 
   - Asymmetric: Different keys are used in encrytpion and decryption , public key/ private key

   ## Hashing
   - One way encryption
   - convert readable text to cipher but not back to readable
   - hashing of a text always return same cipher
   

   ## Salt
   - Adding random characters in hash value 


  ## Authentication & Authorization 
  - Authentication:Who you are? Logged In user
  - Authorization: What you can do ? User role

  ## JWT- JSON WEB TOKEN
  - self verified token
  - used for auth
  - Tamper proof

  ## JWT Structure
  - Header
  - Payload
  - Signature

  ## JWT create and verify

  - jwt.sign(data,"signature);
  - jwt.verify(token, afule pathauney secret)



  ## Storage
  1. Cookie Storage
     - Size:4KB
     - Expiry: Cookie expiry
     - Storage: Server & Browser
  2. Local Storage
     - Size: 5MB
     - Storage: Only Browser
     - Expiry : Never
  3. Session Storage
    - Size:5MB
    - Storage: Only Browser
    - Expiry: On tab close

   ## Auth Process
   1. Login/Register success
   2. Generate token(JWT)
   3. Store Token
   4. Append Token in every request to handle auth
   5. verify the user and authenticate/authorize user

   ## Middleware 
   - Function that lies between request and response
  
   Browser--------- Request --------> Server
   Middleware
   Server---------- Response -------> Browser

    - Function that has the access of both request and response object
    - It has additional functionality to go to next middleware call

    ## Usage
    - Logging
    - Authentication & Authorization
    - Request and response object modification
    - Error handling, Data validation

    ## Authorization
    - RBAC(Role Based Access Control)

    1.USER-> Purchase
    2.MERCHANT->Product create/update/delete
    3.ADMIN->Product management, user management, order management

 ## NODEJS Code Semantics

 - Always format your code
 - Use proper spacing and line spacing
 - Always use camelCase while naming your files and folders in JS("helloWorld")
 - Always use camelCase while naming your functions and variables in JS(createUser)
 - File, variable must be noun
 - Functions & methods must be a verb
 - Also check singular and plural case
 - Avoid using number while naming variable, function, file(test1 ❌  testOne✅)
 - add a line above return statement
 - If you have a list of codes , arrange them in ASC order


 ## Entity
 - Model
 - Service
 - Controller
 - Routes
 - Validation Schema(libs)

 ## Product Orders
 - user (Customer)
 - userItems
    - products
    - quantity
 - status: pending, confirmed, shipped, delivered, cancelled
 - shippingAddress
 - totalPrice
 - orderNumber

