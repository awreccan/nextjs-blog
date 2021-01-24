// TOTAL <12-16h

// UI - 2h
// material ui react

const Login = () => {}

const merchants = []
const Home = () => (
  <>
    // table - cols: id, logo, (x button to delete, not required)
    {merchants.map(m => <MerchantsRow merchant={m} />)}
    <CreateMerchantButton onClick={dialog.open(new Merchant())} />
  </>
)

const Dialog = (props) => <>
  <XButton/>
  <props.Component/>
</>

const Merchant = () => (
  <>
    <ID /> // non-editable
    <Logo /> // default - thinking of small sprites, alphabet sized, like google contact circles
    <Members /> // list
    <CreateMemberButton /> // adds a row to the list - editable when focussed
    <SaveButton />
  </>
)

const MerchantsRow = () => (
  <>
    <ID />
    <Logo />
    <DeleteButton />
  </>
)

// Merchants - add button
// CreateMerchant

// APIs - 2h

// post merchant
// patch merchant
// get merchants - paginated

// post member
// patch member
// delete member
// get merchants/id/members - paginated


// MODELs
// merchant -> member
const merchant = {
  id: null, // unique
  name: '', // i added
  logo: null, // png only, < 50kb
  members: [],
}

const member = {
  email: '', // unique
}

// DB - 2h
// string, uuid, one to many, png with size limit (blob?)
// pagination
// optimistic concurrency is fine for small DBs

// Good to have

// TESTs - 2h
// UTs for APIs

// AUTH? - 2-4h
// admin model {username, pw}, create (signup) api, db to save creds, signup and login ui
// concurrency management

// Fix/polish - 2-4h
