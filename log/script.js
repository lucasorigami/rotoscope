let output = document.getElementById("output");
        let html = "";


        fetch("https://opensheet.elk.sh/1ChwU8F027gQm2jdTr5JHis1jx_p8byyYA-q2EK36tXk/munka"
        )
            .then((res) => res.json())
            .then((data) => {
                for (let item of data) {
                    html += `
            <h1><a href="" id="projectTitle">${item.ProjectTitle}</a> </h1>
            <div class="templateContainer" ${item.classname}>
          
            <div class="descriptionContainer" >
                <p>${item.Description} </p>
            </div>
            <div class="imageContainer"> 
                <img src="${item.Image}"></img>
            </div>
            <div class="materialContainer"> 
                <p>${item.Material} </p> 
            </div>
            <div class="yearContainer"> 
                <p>${item.Year} </p> 
            </div>
            <div class="sourceContainer" > 
                <p><a href="${item.Source}" target="_blank">${item.Source}</a> </p>
            </div>
            </div>
            `;
                }
                output.innerHTML = html;


            });
        // output.textContent = JSON.stringify(data, undefined, 2)});








    