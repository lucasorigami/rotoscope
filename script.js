let output = document.getElementById("output");
let html = "";


fetch("https://opensheet.elk.sh/1wLuU7IKkp0cR2He09kU4lo84ue2qef_gUjvCsJUljmU/sheet"
)
    .then((res) => res.json())
    .then((data) => {
        for (let item of data) {
            html += `
    <h1><a href="" id="projectTitle">${item.Week}</a> </h1>
    <div class="templateContainer" ${item.classname}>
  
    <div class="descriptionContainer" >
        <p>${item.Week} </p>
    </div>
    <div class="imageContainer"> 
        <img src="${item.Description}"></img>
    </div>
    <div class="materialContainer"> 
        <p>${item.Tasks} </p> 
    </div>
    <div class="yearContainer"> 
        <p>${item.Todo} </p> 
    </div>
    <div class="yearContainer"> 
    <p>${item.Feedback} </p> 
    </div>
    </div>
    <div class="yearContainer"> 
    <p>${item.Keywords} </p> 
    </div>
    </div>
    <div class="yearContainer"> 
    <p>${item.Image} </p> 
    </div>
    
    <div class="sourceContainer" > 
        <p><a href="${item.Source}" target="_blank">${item.Source}</a> </p>
    </div>
    </div>
    `;
        }
        output.innerHTML = html;


    });