let startYear = document.querySelector('#start')
let endYear = document.querySelector('#end')
let button = document.querySelector('button')
let message = document.querySelector('h4')
let ul = document.querySelector('ul')

button.addEventListener('click', ()=>{

    //if start year is greater than end year
    if(startYear.value>endYear.value){
        message.innerHTML = 'End year should be greater than the start year.'

    // if start year is less than 1581 and end year is more than 3000
    }else if(startYear.value<1581 || endYear.value>3000){
        console.log('The start year and end year should be creater than 1581 and less than 3000.')
        message.innerHTML = 'The start year and year should be creater than 1581 and less than 3000.'
    }else{
        // create a table of years with the interval between the beginning year and the end year
        let arrYearsToVerify = []
        for(let i = startYear.value; i<=endYear.value;i++){
            arrYearsToVerify.push(i)
        }
        // create a table of leap years
        let arrLeapYears =[]
        for( let j=0; j<arrYearsToVerify.length;j++){
            if((arrYearsToVerify[j]%4) === 0){
                arrLeapYears.push(arrYearsToVerify[j])
            }
        }

        // display leap years 
        for(let y = 0; y< arrLeapYears.length; y++){
            let li = document.createElement('li')
            ul.append(li)
            li.innerHTML = arrLeapYears[y] + ',&nbsp'
        }
        message.innerHTML = `There are ${arrLeapYears.length} years between ${startYear.value} & ${endYear.value}`
    }

})