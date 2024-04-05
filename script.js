let output = document.getElementById("output");
let html = "";


fetch("https://opensheet.elk.sh/1wLuU7IKkp0cR2He09kU4lo84ue2qef_gUjvCsJUljmU/sheet"
)
    .then((res) => res.json())
    .then((data) => {
        for (let item of data) {
            html += `
            <div class="Identifier"> 
            <p>${item.Idendtifier} </p> 
  
                 <div class="Week" >
                    <p>${item.Week} </p>
                 </div>
                 <div class="Description"> 
                    <img src="${item.Description}"></img>
                </div>
                <div class="Tasks"> 
                    <p>${item.Tasks} </p> 
                </div>
                <div class="Todo"> 
                    <p>${item.Todo} </p> 
                </div>
                <div class="Feedback"> 
                    <p>${item.Feedback} </p> 
                </div>
                <div class="Keywords"> 
                    <p>${item.Keywords} </p> 
                </div>
                <div class="Image"> 
                    <p>${item.Image} </p> 
                 </div>

            </div>
    `;
        }
        output.innerHTML = html;


    });