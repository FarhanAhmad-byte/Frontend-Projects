import { DateTime } from './node_modules/luxon/build/es6/luxon.mjs'
// import { DateTime } from 'luxon'

function calcYear(birthDate) {
    const current = DateTime.now()
    const birthday = DateTime.fromFormat(birthDate, "yyyy-MM-dd")

    const currentYear = current.year
    const birthYear = birthday.year
    const currentMonth = current.month
    const birthMonth = birthday.month

    if (currentYear > birthYear){
        if (currentMonth < birthMonth) {
            // calculate total months if birthday is not happen
            const months = 12 + currentMonth - birthMonth
            
            let year = (currentYear - birthYear) - 1

            // did'nt show year if less than 1
            if (year == 0) {
                year = ""
            } else {
                year = `${year} years`
            }

            return `You are ${year} ${months} months old`
        }
        else {
            // return age if birthday already happened 
            return `You are ${currentYear - birthYear} years old`
        }
    }
    else if (currentYear == birthYear) {
        // return only months old if birth is in the current year
        if (currentMonth > birthMonth) {
            return `You are ${currentMonth - birthMonth} months old`
        } else {
            return "You are not born yet 😂"
        }
    }
    else {
        return "You are not born yet 😂"
    }
}

export default calcYear