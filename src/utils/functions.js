const axios = require('axios');


//we brought this in from App.js and then imported it from here to App.js
//we also changed the api path to url
module.exports = {
    getCars(url) {
        return axios.get(url).then(res => {
            return res.data
        })
    },
    filterById(cars, id) {
        return cars.filter(car => {
            return car.id == id
        })
    },
    randomNum() {
        return Math.floor(Math.random() * 10)+ 1
    },
    // filterByColor(cars, color){
    //     return cars.filter(car => {
    //         return car.color == color
    //     })
    // },
    
    battle(elfH, elfA, orcA, orcH) {
        while(elfH > 0 || orcH > 0) {
          orcH -= elfA;
          if (orcH<= 0) {
            return 'Elf';
          }
          elfH -= orcA;
          if (elfH <= 0) {
            return 'Orc';
          }
        }
      }

}
