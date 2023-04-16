const {PerformanceCalculator}=require('./src/PerformanceCalc');

const main=()=>{
    let Player1=["Player1",40,12]; //[name,runs,balls]
    let Player2=["Player2",150,46]; 
    let Player3=["Player3",150,100]; 

    var Players=[];
    Players.push(Player1);
    Players.push(Player2);
    Players.push(Player3);

    // console.log(Players)
    Players.forEach(player => {
        console.log(player[0]+" : "+"Batting Average = "+ PerformanceCalculator(player[1],player[2]));
    });
}

main();