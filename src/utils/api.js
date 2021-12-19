import axios from "axios";

/* const Url_Back_End = "http://13.36.116.140:8000/api"; */
const Url_Back_End = "http://localhost:8000/api";

export const loginAPI = (utilisateur) => {
  return axios.post(Url_Back_End + "/login", {
    ...utilisateur,
  });
  /* .catch((err) => console.log("aaaaa :", err.response.status)); */
};

export const getAllReferentsAPI = () => {
  return axios
    .get(Url_Back_End + "/getAllReferenceur")
    .catch((err) => console.log("aaaaa :", err.response.status));
};
export const getAllFormateursAPI = () => {
  return axios
    .get(Url_Back_End + "/getAllFormateur")
    .catch((err) => console.log("aaaaa :", err.response.status));
};
export const ajoutReferentAPI = (utilisateur) => {
  return axios
    .post(Url_Back_End + "/registerUtilisateur", {
      ...utilisateur,
      role: "référenceur",
      username: utilisateur.email,
    })
    .catch((err) => console.log("aaaaa :", err.response.status));
};
export const ajoutFormateurAPI = (utilisateur) => {
  return axios
    .post(Url_Back_End + "/registerUtilisateur", {
      ...utilisateur,
      role: "formateur",
      username: utilisateur.email,
    })
    .catch((err) => console.log("aaaaa :", err.response.status));
};
export const ajoutAdminAPI = (utilisateur) => {
  return axios
    .post(Url_Back_End + "/registerUtilisateur", {
      ...utilisateur,
      role: "admin",
      username: utilisateur.email,
    })
    .catch((err) => console.log("aaaaa :", err.response.status));
};

export const getAllAdminsAPI = () => {
  return axios
    .get(Url_Back_End + "/getAllAdmin")
    .catch((err) => console.log("aaaaa :", err.response.status));
};
export const supprimerReferentAPI = ({ email }) => {
  return axios
    .post(Url_Back_End + "/removeUtilisateur", {
      email,
    })
    .catch((err) => console.log("aaaaa :", err.response.status));
};
export  const handleSaveToPC = jsonData => {
  const fileData = JSON.stringify(jsonData);
  const blob = new Blob([fileData], {type: "text/plain"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = "C:\Users\Achref\Desktop\formation\src\filename.json";
  link.href = url;
  link.click();
  console.log("done")
}