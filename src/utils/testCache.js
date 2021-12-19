import { reactLocalStorage } from "reactjs-localstorage";
import { data } from "../Pages/MatieresPremieres/dummyData";

var _ = require("lodash");

export const getCacheMatiere = () => {
  let cachedMatieres =reactLocalStorage.getObject("matieres");
  let matieresToReturn = [];
  if (Object.keys(cachedMatieres).length <= 0) {
    reactLocalStorage.setObject("matieres", data);
    cachedMatieres = reactLocalStorage.getObject("matieres")
  }
  var isEqual = _.isEqual(data, cachedMatieres);
  if (!isEqual && Object.keys(cachedMatieres).length >= 0) {
    matieresToReturn = cachedMatieres;
  } else {
    matieresToReturn = data;
  }
  return matieresToReturn;
};

export const checkCacheMatiere = (storeMatieres) => {
    const cachedMatieres = reactLocalStorage.getObject("matieres");
    return   _.isEqual(storeMatieres, cachedMatieres);
}

export const updateCacheMatiere = (position,replaceMatiere) => {
  let cachedArray = reactLocalStorage.getObject("matieres");  
  cachedArray.splice(position, 1,replaceMatiere);
  reactLocalStorage.setObject("matieres", cachedArray);
}




