let diceNum = document.getElementById('diceNum')
        let result = document.getElementById('result')
        let images = document.getElementsByClassName('images')[0]
        let outDiv = document.getElementsByClassName('output')[0]
        function dice(){
            let numDice = []
            let numImage = []
            for(let i=1;i<=Number(diceNum.value);i++){
                let num = Math.ceil(Math.random()*6)
                numDice.push(num)
                numImage.push(`<img src='dice/${num}.png' alt='dice ${num} img'>`)
            }
            result.textContent = `Rolled Dice value is: ${numDice.join(', ')}`
            images.innerHTML = numImage.join('')
            outDiv.style.backgroundColor = `rgb(${250},${211},${219})`
            outDiv.style.boxShadow = `${10}px ${10}px ${10}px rgba(${0},${0},${0},${0.37})`;
            console.log(outDiv)
        }