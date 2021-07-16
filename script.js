`use strict`;

window.onload = function() {
    let hidenNum = document.querySelector('.result_number_num')
    let number = Math.trunc(Math.random() * 20) + 1
    console.log(number)

    const again = document.querySelector('#again')
    const check = document.querySelector('#check')

    let body = document.querySelector('body')
    let comment = document.querySelector('#comment')
    let score = document.getElementById('score')
    let highscore = document.getElementById('highscore')
    let inputNum = document.querySelector('.footer_number')


    inputNum.addEventListener('click', function() {
        inputNum.value = ''
    } )

    check.addEventListener('click', function () {
        if (score.textContent <= 1) {
            comment.textContent = 'You lost :(!'
            body.style['background-color'] = '#eb5a46'
            hidenNum.textContent = number
            score.textContent = 0 
        }
        else if (inputNum.value == number) {
            comment.textContent = 'You won :)!'
            body.style['background-color'] = '#68bb59'
            if (score.textContent > highscore.textContent && highscore.textContent != 10) {
                highscore.textContent = score.textContent
            }
            else if (score.textContent == 10) {
                highscore.textContent = 10
            }
        }
        else {
            if (!inputNum.value) {
                comment.textContent = 'No value!'
            }
            else {
                if (inputNum.value > number) {
                    comment.textContent = 'To high!'
                    score.textContent = score.textContent - 1 
                    console.log(score.textContent)
                }
                else if (inputNum.value < number) {
                    comment.textContent = 'To low!'
                    score.textContent = score.textContent - 1 
                    console.log(score.textContent)
                }
            }
        }
    })

    again.addEventListener('click', function () {
        number = Math.trunc(Math.random() * 20) + 1
        console.log(number)
        body.style['background-color'] = '#333'
        comment.textContent = 'Start!'
        inputNum.value = ''
        score.textContent = 10
        hidenNum.textContent = '?'
    })

}




