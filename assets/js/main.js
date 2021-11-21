function insert (num) {

    const number = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = number + num

}

function clean () {

    document.getElementById('result').innerHTML = ''

}

function back () {

    const result = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = result.substring(0, result.length -1)

}

function calculate () {

    const result = document.getElementById('result').innerHTML
    if (result) {

        document.getElementById('result').innerHTML = eval(result)

    } else {

        document.getElementById('result').innerHTML = 'Nothing....'
    }

}