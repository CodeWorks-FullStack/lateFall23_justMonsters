import { AppState } from "../AppState.js";
import { monstersService } from "../services/MonstersService.js";
import { setHTML } from "../utils/Writer.js";

function _drawSpottedMonsters(){
  const monsters = AppState.spottedMonsters
  console.log('monsters in spotted', monsters);
  let content = ''
  monsters.forEach(monster => content += monster.SpottedCard)
  setHTML('spotted-monsters', content) //🧪
}


export class SpottedMonstersController{
  constructor(){
    console.log('👀👺🎮');//🧪
    _drawSpottedMonsters()// 🧪🧪🧪 it only runs if you invoke it
    AppState.on('spottedMonsters', _drawSpottedMonsters)
    // monstersService.loadSpottedMonsters() //🧪 I wrote quite a bit and didn't test as much this time
    // This is now handled INSIDE the appstate, since two different controllers need it to run
  }
}