# Noble Interview Task

### Part 1

Create a page /urls which displays a simple table of all URLs. Only display the name and url columns and sort by name.


### Part 2

Add an input to the top of the /urls page. Filter the urls on the frontend by searching for the input value in the url or name.


### Part 3

- Add a user table with id and address (string). Primary key id can be added using `id Int @id`
- Allow users on the homepage to "Connect Wallet" which triggers metamask to sign a message validating ownership of their wallet address. A static message is fine. ethers.js would be good.
- A `/api/login` route should validate the signature. If valid, create a cookie for the user using https://github.com/andreizanik/cookies-next

### Part 4

- Modify the urls table to include an optional userId which relates to the user table.
- When posting with `/api/create`, if there is a valid user signed in, create the URL connected to the user.
- Change the `/urls` page from part 1 to only show urls created by the user.
