firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})


//view firestore data

var firestore = firebase.firestore()


function getAllDataOnce(){
    db.collection("fomData").get().then((querySnapshot)=>{
        var formdata = [];
        querySnapshot.forEach(doc=>{
            formdata.push(doc.data());
        });
    });
    
}

function getAllDataRealtime(){
    db.collection("fomData").onSnapshot((querySnapshot)=>{
        var formdata = [];
        querySnapshot.forEach(doc=>{
            formdata.push(doc.data());
        });
    });
    
}




function logout(){
    firebase.auth().signOut()
}