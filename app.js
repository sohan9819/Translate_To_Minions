const inputArea = document.querySelector("#inputText");
const translateBtn = document.querySelector('#submit');
const outputArea = document.querySelector('#outputText');

translateBtn.addEventListener('click' , function(e){
    e.preventDefault();
    let url = Url(inputArea.value);
    if ( inputArea.value === ""){
        outputArea.value = ""
    }else {
        translate(url);
    }
});

const translate = (url) => {
    fetch(url)
    .then (res => {
        return res.json()
    })
    .then(data => {
        // console.log("Data Parsed");
        outputArea.value = data.contents.translated;
    })
    .catch(err => {
        alert("Opps Error!!! \nPlease try again after sometime")
        console.log("Error!!!!" , err)
    })
}

const Url = (text) => {
    return 'https://api.funtranslations.com/translate/minion.json?text=' + `"${text}"`;
}

inputArea.addEventListener('click' , function(){
    // console.dir(outputArea)
    outputArea.value="";
})
