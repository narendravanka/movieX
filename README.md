
# TMDB movie angular app
### -Amazing movie ui design experience
##### API_KEY should be needed. Replace it with your - MovieDB  API_KEY. 
-  Signup TMDB website will give 
-  v3 API_KEY
-  v4 JWT token
- TMDB authenticated by using this API_KEY or JWT token .
-  movieX is a angular 13 app, web-based, fetching the movies data using TMDB api's.
## 1. Installation

```sh
git clone https://github.com/narendravanka/movieX.git
cd movieX
npm i
- Key note - edit  <enviroment.prods.ts> replace API_KEY
ng serve
```
- open browser > localhost:4200 (enter) 
- Angular default running port,If change $  ng serve --port <port_number>
###    2. Offline method running  Angular apps
- Install  Node.js platform  https://nodejs.dev/ 
- Install angular cli  ------    npm install @angular/cli
###   Creating an angular app movieX
- $ ng new movieX
-  Enable routing
###### Componenets : ng g c components/<component_name> 
- Have given component_name : header, landing, movie, movie-card,movie-screenshot
###### Services : ng g s services/<service_name>
- service_names given as : movie
###### I'm using Material. Install matrial --------  ng add @angular/material
- Add required material api's into material/material.module.ts
- ex:  import {MatCardModule} from '@angular/material/card'; ....etc,.
- add  - <app.module.ts>  add <MaterialModule> at imports 
###### Edit   <app.component.html> 
- <app-header></app-header>
- <router-outlet> </router-outlet> ( All dynamic pages rendered in router-outlet )
###### Edit <app-routing.module.ts>
- ex. const routes : Routes = [
-   { path : 'movie/:id' , component : MovieComponent},
-   { path: '',component: LandingComponent  } (Add more like this way)
- ] 
- Open browser > localhost:4200/movie (enter)
- Displays : movie works
- this is the way Routing works
###### HTTP service
- Add <movie.service.ts>
-  import { HttpClient } from '@angular/common/http';
-  Now add Injectable as root 
-  In constructor declare HttpClient instance
-  Ex:. constructor( private <http>: HttpClient ) Instane should be private.
##### Example get call from movieDB
- Place your key & replace API_KEY ex : 33333fe02a663333333ssdwe3d
- Pic :  http.get(`https://image.tmdb.org/t/p/w500/e66tM5YOawXLxhDAfWkR7sxpb3h.jpg`)
-  http.get(`https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US`)
-  Result data: {
    "adult": false,
    "backdrop_path": "/ky7uPBRqWmgE6PelQ6BAfairDKB.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
        {
            "id": 99,
            "name": "Documentary"
        }
    ],
    "homepage": "",
    "id": 949214,
    "imdb_id": null,
    "original_language": "fr",
    "original_title": "Gandhi, de l'homme à l'icône",
    "overview": "",
    "popularity": 1.385,
    "poster_path": "/bRUusBi86WEQ2cIX02u1ItCnUdP.jpg",
    "production_companies": [
        {
            "id": 7131,
            "logo_path": "/eLvjHPYZ12GR58lrDgg6MXZp2a3.png",
            "name": "France Télévisions",
            "origin_country": "FR"
        },
        {
            "id": 92191,
            "logo_path": null,
            "name": "Temps noir",
            "origin_country": "FR"
        }
    ],
    "production_countries": [],
    "release_date": "2019-01-01",
    "revenue": 0,
    "runtime": 0,
    "spoken_languages": [],
    "status": "Released",
    "tagline": "",
    "title": "Gandhi, de l'homme à l'icône",
    "video": false,
    "vote_average": 6.0,
    "vote_count": 1
}
-  It returns Observable data can get by subscribe method
###### -Now perform operations as required.
###### -Or  Use this repo code into your angular app  and run it.
### Features
- Responsive design
- Awesome UI design
- List of Movies based on popularity & you can fetch as your selected movies.
- Loading all screenshots of movie you selected.

## License
MIT
Free Software.
  # movieX  UI 

![Screenshot (155)](https://user-images.githubusercontent.com/24605480/158610073-95f8abd8-bc2e-4372-87d2-332dbc490c91.png)
![Screenshot (156)](https://user-images.githubusercontent.com/24605480/158610095-36f2849c-e1eb-4133-89db-733528797e5c.png)

  
