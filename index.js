const fs = require('fs')
const jwa = require('jwa')
const priv = fs.readFileSync(__dirname + '/keys/private.pem')
const pub = fs.readFileSync(__dirname + '/keys/public.pem')
const ec = jwa('ES512')

const input = {
  message: 'The baz and foo hangs at the bar tonight',
  user: {
    name: 'Baz',
    email: 'baz@badbaz.com'
  }
}

const opts = {
  algorithm: 'ES512',
  expiresIn: '3d',
  audience: 'interwebz'
}

const signature = ec.sign(input, priv, opts)

console.log('Signature:', signature)
console.log('Signature Valid:', ec.verify(input, signature, pub))
