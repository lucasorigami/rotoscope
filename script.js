let output = document.getElementById("output");
let html = "";


fetch("https://opensheet.elk.sh/1wLuU7IKkp0cR2He09kU4lo84ue2qef_gUjvCsJUljmU/sheet"
)
    .then((res) => res.json())
    .then((data) => {
        for (let item of data) {
            html += `
            <div class="Identifier" id="${item.Idendtifier}"> 
            `;

            if (item.Week) {
                html += `                 
                <div class="Week">
                    <p>${item.Week} </p>
                </div>`;
            };
            if (item.Description) {
                html += `
                <div class="Description"> 
                    <p>${item.Description}</p>
                </div>`;
            };
            if (item.Tasks) {
                html += `
                <div class="Tasks"> 
                    <p>${item.Tasks} </p> 
                </div>
            `;
            };
            if (item.Todo) {
                html += `
                <div class="Todo"> 
                    <p>${item.Todo} </p> 
                </div>
            `;
            };
            if (item.Feedback) {
                html += `
                <div class="Feedback"> 
                    <p>${item.Feedback} </p> 
                </div>
            `;
            };
            if (item.Keywords) {
                html += `
                <div class="Keywords"> 
                    <p>${item.Keywords} </p> 
                </div>
                `;
            };
            if (item.image) {
                html += `<div class="Image">
                    <img src="${item.Image}"></img>
                </div>`
            };

            html += `</div>`;
        }
        output.innerHTML = html;


    });