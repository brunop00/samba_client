const contentField = document.querySelector('#row_js')

const file_dir_json = [
    {
        type: "file",
        name: "arquivo1.txt"
    },
    {
        type: "folder",
        name: "pasta1"
    }
]

let generatedContent = ''
for(let fl of file_dir_json){
    if(fl.type=="file"){
        generatedContent+=`<div class="col-md-2 col-sm-2 col-xs-12">
                                <div class="card">
                                    <div class="cardbody text-center x_content">
                                        <i class="fas fa-file icons"></i>
                                        <div class="text-center">${fl.name}</div>
                                    </div>
                                </div>
                            </div>`    
    }else if(fl.type=="folder"){
                generatedContent+=`<div class="col-md-2 col-sm-2 col-xs-12">
                                        <div class="card">
                                            <div class="cardbody text-center x_content">
                                                <i class="fas fa-folder icons"></i>
                                                <div class="text-center">${fl.name}</div>
                                            </div>
                                        </div>
                                    </div>`
    }
}
contentField.innerHTML = generatedContent