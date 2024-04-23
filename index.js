var inputSiteName = document.getElementById("inputSiteName");
var inputurl = document.getElementById("inputurl");
var submitButton = document.getElementById("submitButton");
var tableContent = document.getElementById("tableContent");

var list = [];

if (localStorage.getItem("website") !== null) {
  list = JSON.parse(localStorage.getItem("website"));
}

function Addwebsite() {
  var website = {
    Name: inputSiteName.value,
    Visit: inputurl.value,
  };
  list.push(website);
  localStorage.setItem("website", JSON.stringify(list));
  displayweb(list.length-1)
  reset() 
}

function displayweb(index) {
  var webhtml = ` 
  <tr>
    <td>${index+1}</td>
    <td>${list[index].Name}</td>
    <td>
      <a href="https://${list[index].Visit}"" class="btn btn-visit"> <i class="fa-solid fa-eye pe-2"></i>Visit</a>
    </td>
    <td>
      <button class="btn btn-delete pe-2" onclick="Deletweb(${ index})">
        <i class="fa-solid fa-trash-can"></i>
        Delete
      </button>
    </td>
  </tr>
    `;
  tableContent.innerHTML += webhtml;
}


function displayallweb() {
  for( var i=0;i<list.length;i++)
  displayweb(i)
}
displayallweb()

function reset() {
  inputSiteName.value=null;
  inputurl.value=null;
}

function Deletweb(index) {
  list.splice(index,1)
  localStorage.setItem("website",JSON.stringify(list))
  tableContent.innerHTML ="";
  displayallweb()

}


var siteName=/^[A-Z][a-z]{3,}$/;
var siteUrl=/^[A-Z][a-z]{3,}(\.com)$/

function validation(regex,element) {
  if (regex.test(element.value)) {
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
  }else{
    element.classList.remove("is-valid")
    element.classList.add("is-invalid")
  }
}