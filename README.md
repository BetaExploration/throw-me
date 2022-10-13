# Noble Interview Task

### Setup

- `npm install` to install dependencies
- `npm run dev` to run the server
- Open `localhost:3000`


### Part 1

Create a page /urls which displays a simple table of all URLs.
Only display the name and url columns and sort by name.
Create a pages/api function to fetch them and use `fetch` on the frontend to call it.


### Part 2

Add an input to the top of the /urls page. Filter the urls on the frontend by searching for the input value in the url or name.


### Part 3

- Use ethers.js to allow users on the homepage to "Connect Wallet". Show their wallet address at the top of the page. 
- Change the urls table to include a string for the creators wallet.
- Require the user to sign a message to prove they own that wallet when submitting a link and verify the message before storing it.

### Part 4

Change the `/urls` page from part 1 to only fetch the urls created by the connected wallet.
