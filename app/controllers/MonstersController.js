import { AppState } from "../AppState.js";
import { monstersService } from "../services/MonstersService.js";

function _drawMonstersCards(){
  const monsters = AppState.monsters
  let content = ''
  monsters.forEach(monster => content += monster.MonsterCard) //🧪 tested with monster.name before we had a template, so we could make sure the draw drew data
  document.getElementById('monster-cards').innerHTML = content 
}


export class MonstersController{
  constructor(){
    console.log('👺 monster time'); //🧪
    AppState.on('monsters', _drawMonstersCards) //🧪 The listener sits and waits for a change to monsters to occur, then draws. This can happen at anytime as long as monsters changes
    this.getMonsters() // this takes some time to happen and we can't pause the constructor, so it draws before our monsters come back from the api
    _drawMonstersCards() //🧪 once completed the function test it
  }

  getMonsters(){
    console.log('getting 👺'); //🧪 testing to see the get happen before we draw it
    monstersService.getMonsters()
  }

  spottedMonster(monsterId){
    console.log('👀👺', monsterId);//🧪 did the Id come in and not error
    monstersService.spottedMonster(monsterId) // ctrl + . to declare a method on your service if it does't exist
  }

}