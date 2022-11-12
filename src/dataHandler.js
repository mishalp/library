import { db } from "../firebase";
import { auth } from "../firebase";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"; 


export const addData = async(book)=>{
    console.log('nja');
    try {
        const docRef = await addDoc(collection(db, auth.currentUser.uid), {
        ...book
        });
        //console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const readData = async() =>{
    return new Promise((resolve,reject)=>{
        auth.onAuthStateChanged(async(user)=>{
            const querySnapshot = await getDocs(collection(db, auth.currentUser.uid));
            const books =[]
            querySnapshot.forEach((doc) => {
                books.push({
                    author: doc.data().author,
                    title: doc.data().title,
                    pages: doc.data().pages,
                    read: doc.data().read,
                    id : doc.id
                })
              });
              resolve(books)
    })
    })
}

export const updateData = (id, newData)=>{
    auth.onAuthStateChanged(async(user)=>{
        const dataRef = doc(db, user.uid, id);
        await updateDoc(dataRef,{
            read: newData
        });
    })
}

export const removeData =(id)=>{
    auth.onAuthStateChanged(async(user)=>{
        await deleteDoc(doc(db, user.uid, id));
    })
}

