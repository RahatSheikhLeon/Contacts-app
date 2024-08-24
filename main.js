

function addcont() {
  // Get the element with the ID 'NumberSaveSystem'
  let element = document.getElementById('NumberSaveSystem');

  // Add the 'info-active' class to the element
  element.classList.add('info-active');




}

function save() {
  // Get form values
  let firstName = document.getElementById('FirstName').value;
  let lastName = document.getElementById('LastName').value;
  let phoneNumber = document.getElementById('PhoneNumber').value;
  let category = document.getElementById('option').value;
  let categoryInput = document.getElementById('categoryInput');
  let fullNameInnerPage = document.getElementById('fullName');

  // Create full name by combining first and last name
  let fullName = `${firstName} ${lastName}`;

  // Create a span element for the full name and set its class and innerHTML
  let fullNameSpan = document.createElement('span');
  fullNameSpan.className = 'full-name';
  fullNameSpan.innerHTML = fullName;
  fullNameInnerPage.innerHTML = fullName;
  fullNameSpan.onclick = function () {
    let mooreInfo = document.getElementsByClassName('info-wrapper')
    for (let i = 0; i < mooreInfo.length; i++) {
      // Add the 'phone' class to each element
      mooreInfo[i].classList.add('info-active');
    }
    console.log(mooreInfo)
  };


  // Create a wrapper div for the output
  let outputWrapper = document.createElement('div');
  outputWrapper.className = 'data-Wrapper';
  let deleteNumber = document.getElementById('deleteNumber')
  deleteNumber.onclick = function(){
    alert('You Can Delete The Number')
    outputWrapper.classList.add('display-none');
  }
  // Create a div for the image box
  let outputImgBox = document.createElement('div');
  outputImgBox.className = 'img-box';
  outputImgBox.id = 'imgBox';
  let defaultIcon = document.createElement(`i`);
  defaultIcon.className = 'fa-regular fa-user';
  defaultIcon.id = 'iconForUser';
  let ownerImgINput = document.getElementById('ownerImg');

  // Create a div for the data box
  let outputDataBox = document.createElement('div');
  outputDataBox.className = 'data-box';

  // Create a list item and append the wrapper, image box, and data box
  const listItem = document.createElement('li');

  listItem.appendChild(outputWrapper);
  outputWrapper.appendChild(outputImgBox);
  // Append full name and phone number spans to the data box
  outputWrapper.appendChild(outputDataBox);
  outputDataBox.appendChild(fullNameSpan);

  // Create a span element for the phone number and set its class and innerHTML
  let ownerNumber = document.getElementById('ownerNumber')
  let phoneNumberSpan = document.createElement('span');
  ownerNumber.appendChild(phoneNumberSpan);
  phoneNumberSpan.innerHTML = phoneNumber;

  //  category input
  categoryInput.innerHTML = category;

  let eventImgValue = document.getElementById('inputFile');

  let defineValuInput = eventImgValue.value.length;
  let imgValue;
  if (defineValuInput === 0) {
    imgValue = 0;
    console.log(imgValue)
  } else {
    imgValue = 1;
    console.log(imgValue)
  }



  let inputImgValue = imgValue;
  if (inputImgValue === 0) {
    console.log('this is if')

    outputImgBox.appendChild(defaultIcon);
  } else {
    console.log('this is els')
    let authorImg = document.createElement('img');
    let getUrlinAuthor = URL.createObjectURL(inputPic.files[0]);
    authorImg.src = getUrlinAuthor;

    outputImgBox.appendChild(authorImg);
  
    

    // if(ownerImgINput.length == 0){
    //   let iconInner = document.getElementById('iconInner')
    //   iconInner.remove();
    // }else{
    //   ownerImgINput.appendChild(authorImg.cloneNode(true));
    // }

  }




  // Append the list item to the list
  let list = document.getElementById('list');
  list.appendChild(listItem);

  // Reset the form
  var form = document.getElementById("myForm");
  form.reset();

  // Remove the 'info-active' class from the element
  let element = document.getElementById('NumberSaveSystem');
  element.classList.remove('info-active');


  // let removeAddImg = document.getElementById('newImgId')
  // removeAddImg.remove()

  let repushIcona = document.getElementById('imgIcon');
  let oldIcon = document.getElementById('icon');
  repushIcona.appendChild(oldIcon);

}

// Profile picture handling

let profilePic = document.getElementById('imgIcon');
let inputPic = document.getElementById('inputFile');
let addImg = document.getElementById('addImages');


inputPic.onchange = function () {

  let addImgTag = document.getElementById('imgIcon');
  let existingImg = document.getElementById('newImgId');
  let oldIcon = document.getElementById('icon')
  if (!existingImg) {
    oldIcon.remove()
    // If the image doesn't exist, create it and append it
    let newImg = document.createElement('img');
    newImg.id = 'newImgId';
    addImgTag.appendChild(newImg);
    existingImg = newImg; // now existingImg refers to the new image
  }

  // Update the src of the existing image
  let getUrl = URL.createObjectURL(inputPic.files[0]);
  console.log(getUrl);
  existingImg.src = getUrl;

  let addImgCloseBtn = document.getElementsByClassName('image-wrapper');
  let addImgCloseBtnTag = document.createElement('a');
  addImgCloseBtnTag.className = 'close-img_btn';
  addImgCloseBtnTag.id = 'closeImgBtn';
  addImgCloseBtnTag.href = '#';
  addImgCloseBtnTag.innerText = 'Close Picture';

  for (let i = 0; i < addImgCloseBtn.length; i++) {
    addImgCloseBtn[i].appendChild(addImgCloseBtnTag.cloneNode(true));
  }



  let dltImg = document.getElementById('closeImgBtn')
  dltImg.onclick = function () {
    let removeAddImg = document.getElementById('newImgId')
    removeAddImg.remove()
    dltImg.remove()
    let repushIcon = document.getElementById('imgIcon');
    repushIcon.appendChild(oldIcon)
  }
};

let back = document.getElementById('back');
let menuOpen = document.getElementById('menuOpen')
let Edit = document.getElementById('Edit')
let menuBody = document.getElementById('infoWrapper')
back.onclick = function () {
  menuBody.classList.remove('info-active')
}
Edit.onclick = function () {
  menuOpen.classList.add('info-active')
}
// menuBody.onclick = function(){
//   menuOpen.classList.remove('info-active')
// }



// .data-Wrapper