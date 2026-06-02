


function downloadfile(callback) {

    console.log("Downloading File .....⏳");

    setTimeout(() => {
        console.log("Download File ..✅");
        callback();

    }, 3000);
}

function openFile()
{
   console.log("Open File...⚠️");    
}
downloadfile(openFile);