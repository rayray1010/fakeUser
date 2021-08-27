let arr = [
  {
    name: 'Daddy',
  },
  {
    name: 'Mommy',
  },
  {
    name: 'Sister',
  },
]

let fil = arr.filter((e) => {
  return e.name.includes('Mommy')
})
console.log(fil)
