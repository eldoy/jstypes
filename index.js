var { handleUser } = require('./lib/user.js')

/** @type {User} */
var user = {}

// or inline like this:
// var user /** @type {User} */ = {}

// Should show error
user.hello = 'hello'

user.age

// Autocomplete works
// user.

// Error if used directly
handleUser({ id: '1', name: 'tekki' })
