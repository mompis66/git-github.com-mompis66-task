const min = 0;
const max = 100;
const attCount = 10;

function getUserName(){
    const userName = prompt("Привет! как тебя зовут, брат ");
    return userName;
}
const userName = getUserName();




const getRandomNumber = maxLimited => Math.round(Math.random() * maxLimited);
const randomNumber = getRandomNumber(max);




const playGame = (minLimit,maxLimit,attsNumber,number,name) => {
         alert(`Здорова,${name}!
         Я загадал число в диапазоне от  ${minLimit} до ${maxLimit}
         У тебя ${attsNumber} попыток, чтобы отгадать его.Удачи брат!`)

         for (let i = 1; i <= attCount ; i++){
              const answer = prompt(`Ну,что думаешь?`);
              if(answer > number){
                  alert(`Число которое я загадал - меньше.
                  У тебя осталось ${attsNumber - i} попыток.`);
              }else if(answer < number){
                  alert(`Число которое я загадал - боьше.
                    У тебя осталось ${attsNumber - i} попыток.`);
              }else{
                   alert(`${name} ты красавчик! все отгадал с ${i}-ой попытки.`);
                   return
              }
         }
         alert(`${name},ты проиграл!`)
}
playGame(min,max,attCount,randomNumber,userName);

