var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("fomData")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let name = document.getElementById('name').value
  let place = document.getElementById('place').value
  let phone = document.getElementById('phone').value

  //Save Form Data To Firebase
  db.doc().set({
    name: name,
    place: place,
    phone: phone
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Your Form Has Been Submitted Successfully")
})