// firebase.auth().onAuthStateChanged((user)=>{
//     if(!user){
//         location.replace("index.html")
//     }else{
//         document.getElementById("user").innerHTML = "Hello, "+user.email
//     }
// })


//view firestore data

var firestore = firebase.firestore()







function logout(){
    firebase.auth().signOut()
}



//------------
