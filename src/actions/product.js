import axios from 'axios';

const BASE_URL="http://localhost:5000/admin/";

export function getAllProducts(){

   console.log("I am in get All Products!!");

   var promise=axios.get(`${BASE_URL}allProducts`);

   return {
       type:'ALL_PRODUCTS',
       payload: promise
   }

}

export function getSpecificProduct(pid){
    console.log("I am in get specific Products!!");
    var promise=axios.get(`${BASE_URL}product/${pid}`);
 
    return {
        type:'CURRENT_PRODUCT',
        payload: promise
    }
 }


 export function updateProduct(pid){
    console.log("I am in get specific Products!!");
    var promise=axios.put(`${BASE_URL}updateProduct/${pid}`);
 
    return {
        type:'UPDATE_PRODUCT',
        payload: promise
    }
 }

 export function deleteProduct(_id){
    console.log("I am in get specific Products!!");
    var promise=axios.delete(`${BASE_URL}deleteProduct/${_id}`);
 
    return {
        type:'DELETE_PRODUCT',
        payload: promise
    }
 }


