import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC69GTkRXXtoRWL34MqzQyWHlIGegRzI1g",
  authDomain: "products-4aa0e.firebaseapp.com",
  databaseURL: "https://products-4aa0e.firebaseio.com",
  projectId: "products-4aa0e",
  storageBucket: "products-4aa0e.appspot.com",
  messagingSenderId: "59604608635",
  appId: "1:59604608635:web:b3328451b52039cba7a4de",
  measurementId: "G-LZLQ7258MX"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export const storage = firebase.storage();

export const getProducts = async product => {
  try {
    if (
      !["Coat_Hook", "Door_Knockers", "Drawer_Pull", "Data_Handler"].includes(
        product
      )
    ) {
      throw new Error("Product category does not exists");
    }

    const products = await fireStore.doc(`/categories/${product}`).get();
    if (products.exists) {
      const data = await JSON.parse(products.data().data);
      return data;
    } else {
      throw new Error("Product type does not exist");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong please try again");
  }
};

export const updateProducts = async (productType, updatedProducts) => {
  try {
    const updatedProductsInString =await JSON.stringify(updatedProducts)
    const res = await fireStore.doc(`/categories/${productType}`).set({data:updatedProductsInString})
    console.log(res)
    return updatedProducts
  } catch (error) {
    console.log(error)
    throw new Error("Could not update")
  }
};

export const addQuestion = async (questionDetails)=>{
  try {
    const {question,productCode}= questionDetails
    if(!question || !productCode){
      return
    }
    const newquestion = await fireStore.collection("question").add({
      question:question,
      email:questionDetails.email,
      contact:questionDetails.number || "NA",
      productCode:productCode
      
    })
    console.log(newquestion)
  } catch (error) {
    console.log(error)
    throw new Error("Could not update")
  }
}


export default firebase;
