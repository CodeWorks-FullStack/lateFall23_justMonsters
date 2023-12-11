import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { MonstersController } from "./controllers/MonstersController.js";
import { SpottedMonstersController } from "./controllers/SpottedMonstersController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [MonstersController],
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/spotted',
    controllers: [SpottedMonstersController],
    view: 'app/views/SpottedMonstersView.html'
  }
])