import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";
import { loadState, saveState } from "../utils/Store.js";




class MonstersService{
  async spottedMonster(monsterId) {
    let response = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${monsterId}`) // the get one monster url is a different 'endpoint' from the get ALL monsters
    let body  = await response.json()
    console.log('👀👺📡', body); //🧪🧪 did it get the right monster?
    let newMonster = new Monster(body.data) // always check the data structure to make sure you are passing the correct data object down, it could be behind layers
    // NOTE we don't map this one cause it was only a single monster in the response body
    console.log('✨👺', newMonster);//🧪 is the data right?
    AppState.spottedMonsters.push(newMonster)
    console.log(AppState.spottedMonsters);//🧪
    // added save later
    this.saveSpottedMonsters()
  }

  async getMonsters(){
    let response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters') // 🧪 checked the network tab in the dev tools for a response
    console.log('👺📡', response); //🧪🧪 once without async await (got a Promise), and again after (pauses the code)
    let body = await response.json()// converts the 'readablestream' into JS literal data types (Arrays, Objects, etc.)
    console.log('👺💾', body); //🧪 look at the data
    let newMonsters = body.data.map(monsterData => new Monster(monsterData)) // using the object from response.body.data, copy the array, but change all the objects into "Monsters"
    //NOTE the map is needed because we had a whole array of monsters to create
    console.log(newMonsters);//🧪🧪🧪 looking at the results from map
    AppState.monsters = newMonsters // 🧪 did they show up?
  }


  saveSpottedMonsters(){
    saveState('spottedMonsters', AppState.spottedMonsters)
  }

  loadSpottedMonsters(){
    let mons = loadState('spottedMonsters', [Monster])
    AppState.spottedMonsters = mons
  }
}

export const monstersService = new MonstersService()