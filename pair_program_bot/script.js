
let testWritten = prompt("Have you written a test?")

if( testWritten === 'no'){
  alert('Write a test.')
}
else if( testWritten === 'yes'){
  let testPass = prompt('Does the test pass?')
  if( testPass === 'no'){
    alert('Fix your code.')
  }
  else if( testPass === 'yes'){
    let refactor = prompt('Do you need to refactor?')
    if( refactor === 'no'){
      alert('Awesome write a new feature')
    }
    else if( refactor === 'yes'){
      alert('Refactor your code.')
    }
    else{
      alert('User answer not valid')
    }

  }
  else{
    alert('User answer not valid')
  }
}
else{
  alert('User answer not valid')
}
