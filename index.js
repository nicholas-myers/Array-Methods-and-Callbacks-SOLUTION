import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final*/
fifaData.forEach(cup => {
    if(cup.Year === 2014 && cup.Stage === "Final"){
        console.log("Home Team Name for 2014: " + cup["Home Team Name"]);
    }
})
// (b) Away Team name for 2014 world cup final
fifaData.forEach(cup => {
    if(cup.Year === 2014 && cup.Stage === "Final"){
        console.log("Away Team Name for 2014: ", cup["Away Team Name"]);
    }
})
// (c) Home Team goals for 2014 world cup final
fifaData.forEach(cup => {
    if(cup.Year === 2014 && cup.Stage === "Final"){
        console.log("Home Team Goals for 2014: ", cup["Home Team Goals"]);
    }
})
// (d) Away Team goals for 2014 world cup final
fifaData.forEach(cup => {
    if(cup.Year === 2014 && cup.Stage === "Final"){
        console.log("Away Team Goals for 2014: ", cup["Away Team Goals"])
    }
})
// (e) Winner of 2014 world cup final */
fifaData.forEach(cup => {
    if(cup.Year === 2014 && cup.Stage === "Final"){
        if(cup["Home Team Goals"] > cup["Away Team Goals"]){
            console.log(`The winner is: ${cup["Home Team Name"]}`);
        }else if(cup["Away Team Goals"] > cup["Home Team Goals"]){
            console.log(`The winner is: ${cup["Away Team Name"]}`);
        }
    }
})

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  const getFinals = data.filter((item) => {
    return item.Stage.includes("Final");
  });
  return getFinals;
}
console.log("TASK #2", getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
  const finalsYears = cb.map((final) => {
    return final.Year;
  });
  // console.log("TASK #3", finalsYears);
  return finalsYears
}

console.log("TASK #3", getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(cb) {
    const winners = cb.map(item => {
        let homeScore = item["Home Team Goals"]
        let awayScore = item["Away Team Goals"]
        if(homeScore > awayScore){
            return item["Home Team Name"]
        } else {
            return item["Away Team Name"]
        }
    });
    return winners
};
console.log('TASK #5', getWinners(getFinals(fifaData)));

getWinners(getFinals(fifaData))

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years) {
  for( let i = 0; i < winners.length; i++) {
    console.log(`In ${years[i]}, ${winners[i]} won the world cup!`)
  }

}

console.log("TASK #6");
getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)))
/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  /* code here */
  const totalHome =  data.reduce((accumulator, currentValue) => {
   return accumulator + currentValue["Home Team Goals"]
  }, 0)

  const totalAway =  data.reduce((accumulator, currentValue) => {
   return accumulator + currentValue["Away Team Goals"]
  }, 0)
  const averageHome = totalHome /data.length
  const averageAway = totalAway /data.length
  const totalScores = totalAway + totalHome

  return `Average Home goals: ${averageHome.toFixed(2)} points, Average Away goals: ${averageAway.toFixed(2)} points`
}

console.log("TASK #7", getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
