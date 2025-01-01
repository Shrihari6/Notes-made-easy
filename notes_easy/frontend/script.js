document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const fileinput = document.getElementById("fileInput");
    if (fileinput.files.length >0) {
        const file = fileinput.files[0];
        const reader = new FileReader();

        reader.onload = function () {
            document.getElementById("notesDisplay").innerText = reader.result;
            document.getElementById("generateImage").disabled = false;
        };
        reader.readAsText(file);
        } else {
            alert(" Upload a file or Couldn-t extract notes Yaar")
        }
    }

);

/*document.getElementById('generateImage').addEventListener("click",  function (){
    const selectedText = window.getSelection().toString();
    if (selectedText) {
        alert('Selected text: ${selectedText} ');
        // backend to be impemented
    } else {
        alert("Please select text boss")
    }
}
);
*/

document.getElementById("generateImage").addEventListener("click", function () {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
        
        fetch('http://127.0.0.1:5500/api/process-text/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selected_text: selectedText }),
      })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => console.error("Error:", error));
    } else {
      alert("select some text Dude!");
    }
  });
  