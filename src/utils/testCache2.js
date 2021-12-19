import { reactLocalStorage } from "reactjs-localstorage";
import { data2 } from "../Pages/Prevision/dummyData";

var _ = require("lodash");

export const getCacheMatiere = () => {
  let cachedPrevision = reactLocalStorage.getObject("previsions");
  let matieresToReturn = [];
  if (Object.keys(cachedPrevision).length <= 0) {
    reactLocalStorage.setObject("previsions", data2);
    cachedPrevision = reactLocalStorage.getObject("previsions");
  }
  var isEqual = _.isEqual(data2, cachedPrevision);
  if (!isEqual && Object.keys(cachedPrevision).length >= 0) {
    matieresToReturn = cachedPrevision;
  } else {
    matieresToReturn = data2;
  }
  return matieresToReturn;
};

export const checkCacheMatiere = (storeMatieres) => {
  const cachedMatieres = reactLocalStorage.getObject("previsions");
  return _.isEqual(storeMatieres, cachedMatieres);
};

export const updateCacheMatiere = (position, replaceMatiere) => {
  let cachedArray = reactLocalStorage.getObject("previsions");
  cachedArray.splice(position, 1, replaceMatiere);
  reactLocalStorage.setObject("previsions", cachedArray);
};
