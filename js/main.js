const contentField = document.querySelector('#row_js')
let files

loadFiles()

function formatSizeUnits(bytes) {
    if (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + ' GB'; }
    else if (bytes >= 1048576) { bytes = (bytes / 1048576).toFixed(2) + ' MB'; }
    else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + ' KB'; }
    else if (bytes > 1) { bytes = bytes + ' bytes'; }
    else if (bytes == 1) { bytes = bytes + ' byte'; }
    else { bytes = '0 byte'; }
    return bytes;
}

function loadFiles() {
    fetch('/api/list-files.php')
        .then(res => res.json())
        .then(json => filesView(json))
}
function filesView(file_dir_json) {
    files = file_dir_json
    for (let [index, file] of Object.entries(file_dir_json)) {
        let fileView = ''
        if (file.type == "N") {
            fileView = `<div class="col-md-2 col-sm-2 col-xs-12 file" data-id="${index}">
                            <div class="card">
                                <div class="cardbody text-center x_content">
                                    <i class="fas fa-file icons"></i>
                                    <div class="text-center">${file.name}</div>
                                    <div class="text-center">${file.type}</div>
                                </div>
                            </div>
                        </div>`
        } else if (file.type == "D") {
            fileView = `<div class="col-md-2 col-sm-2 col-xs-12 file" data-id="${index}">
                            <div class="card">
                                <div class="cardbody text-center x_content">
                                    <i class="fas fa-folder icons"></i>
                                    <div class="text-center">${file.name}</div>
                                    <div class="text-center">${file.type}</div>
                                </div>
                            </div>
                        </div>`
        }
        contentField.insertAdjacentHTML('beforeend', fileView)
        contentField.lastChild.onclick = function(event) {
            $('#file-info').modal('show')
            const fileView = event.target
            const fileId = fileView.dataset.id
            console.log(files[fileId])
        }
    }
}