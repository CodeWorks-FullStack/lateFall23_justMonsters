import { Monster } from './models/Monster.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { loadState } from './utils/Store.js'

class ObservableAppState extends EventEmitter {
/** 
 * @type {Monster[]}
 * start with a simple model and 1-2 sample bits of data, so you can build the underlying functionality like drawing first, before you try to draw EVERYTHING the API has to offer.
 */
  monsters = [
    // new Monster({name: 'dinraal', image: 'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dinraal/image'}),
    // new Monster({name: 'dinraal 2', image: 'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dinraal/image'}), 🧪 Kept these in to test model and initial draw, commented out once we could retrieve data from api
  ]

  /**  @type{Monster[]} */
  spottedMonsters = loadState('spottedMonsters', [Monster])
}

export const AppState = createObservableProxy(new ObservableAppState())