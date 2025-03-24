function DADAfy() {
    var Paragraphs = document.getElementsByTagName("p");
    for (i = 0; i < (Paragraphs.length); i++){
        changeText(Paragraphs[i])
    }
}
            
function changeText(Input) {
    const WordArray = (Input.innerText).split(' ');
    const randomArray = shuffle(WordArray);
    Input.innerHTML = randomArray.join(" ");
 }

function shuffle(array){
    let i = array.length;
    const shuffledWordArray = [];

    while(i != 0){
        let random = Math.floor(Math.random() * i);
        var tmp = array[i]
        array[i] = array [random]
        array[random] = tmp
        i--;
    }

                
    return array;
}

DADAfy();

