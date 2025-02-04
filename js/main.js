document.querySelector('button').addEventListener('click', convert)


//array of wutang names
let firstNameArr = ['Big', 'Buddah', 'Dirty', 'Gucci', "Ol'", 'Foolish', 'Ignint', 'Insane', 'Inspectah', 'Killah', 'Lil', 'Lucky', 'Masta', 'Master', 'name5']
let lastNameArr = ['Menace', 'Samurai', 'Robert', 'Wanderer', 'Watcher', 'Power']

// We wanna grab the names two different posibilities
function mapCC( x,  in_min,  in_max,  out_min,  out_max){
  return Math.floor(x - in_min) * Math.floor(out_max - out_min) / Math.floor(in_max - in_min) + Math.floor(out_min);
}

function grabValues(){

  let q1 = Number(document.querySelector('.q1').value)
  let q2 = Number(document.querySelector('.q2').value)
  let q3 = Number(document.querySelector('.q3').value)
  let sum1 = (q1 + q2 + q3)

  sum1 = Math.floor(mapCC(sum1, 6, 15, 0, 10))

  let q4 = Number(document.querySelector('.q4').value)
  let q5 = Number(document.querySelector('.q5').value)
  let sum2 = (q4 + q5) % 2

  return [sum1, sum2]
}

//function to convert choices to a value that we can use in an array
function convert(){
  let valArr = grabValues()

  let firstName = firstNameArr[valArr[0]]
  let lastName = lastNameArr[valArr[1]]

  document.querySelector('.result').innerText = `Your name is now: ${firstName} ${lastName}`
}
