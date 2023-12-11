


export class Monster{
  constructor(data){
    this.name = data.name
    this.image = data.image
    // 🧪 started with a small testable model before expanding it
    this.description = data.description
    this.id = data.id
    this.commonLocations = data.common_locations ||'unknown' // You can re-format their properties to be your own, but the data coming in still has to match their 'format'
    //🧪 test format
    // you can also create your own properties based on information from the data source
    this.dropsToenail = data.drops?.find(drop => drop.includes('toenail')) // ? conditionally 'digs' into that property, only if it exists
    //any information on data that is not used in the class is just thrown away
    // REVIEW dates (not super particular for the regular monster stuff)
    // REVIEW if no 'argument' is passed into new Date() then it creates a date for RIGHT NOW
    // this.spottedDate = new Date() // always rebuilds the date
    // this.spottedDate = new Date(data.spottedDate) || new Date() this doesn't work when we create new ones but works for laoding old ones
    this.spottedDate = data.spottedDate ? new Date(data.spottedDate) : new Date()
    // checks for if a date is there
    // if true, re-formats the date into a JS 'Date'
    // if false, creates and new 'Date' for RIGHT NOW
  }


  get MonsterCard(){
    // 🧪 test a small template first
    return `
    <div class="col-4 mb-2">
      <div class="card">
      <img src="${this.image}"/>
      <h4>${this.name}</h4>
      <h5>${this.commonLocations}</h5>
      <p>${this.description}</p>
      <p>${this.dropsToenail ? this.dropsToenail : '🙁'}</p>
      <button onclick="app.MonstersController.spottedMonster('${this.id}')" class="btn btn-primary">👀</button>
      </div>
    </div>
    `
  }

  get SpottedCard(){ //🧪 test new card draw
    return `
    <div class="col-6">
      <div class="card bg-dark text-light">
        <p>${this.LongSpotDate}</p>
        <img src="${this.image}"/>
      </div>
    </div
    `
  }

  get LongSpotDate(){
    return this.spottedDate.toLocaleDateString('en-US', {weekday: 'short', month:'narrow', year: '2-digit', hour:'numeric', minute: 'numeric', second: 'numeric'})
  }
}