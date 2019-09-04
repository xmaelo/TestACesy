import axios from "axios";

export const getList = (va) => {
  return axios
    .get("http://localhost:3000/note/"+va, {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      return res.data;
    });
  /*.then(data => {
      console.log(data);
    });*/ 
};

export const addToList = (term, email) => {
  return axios
    .get(
      "http://localhost:3000/note/create/"+email+"/"+term,
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};



export const deleteItem = term => {
  
};

export const updateItem = (term, id) => {
  
};