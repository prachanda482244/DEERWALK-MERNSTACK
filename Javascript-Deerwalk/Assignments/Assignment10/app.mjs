import { info } from "./que.mjs";
import { que1, que2, que3, que4, que5, que6 } from "./que2.mjs";
let log = console.log;
let { user, location, favMovies } = info;
user = info.user;
location = info.location;
favMovies = info.favMovies.join(',');
let msg = `My name is ${user} from ${location} and fav movies is  ${favMovies}`
log(msg)

que1()
que2()
que3()
que4()
que5()
que6()