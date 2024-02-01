const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "https://cdn.pixabay.com/photo/2014/02/07/15/32/parsley-261039_640.jpg") {
        myImage.setAttribute("src", "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_640.jpg");
    } else {
        myImage.setAttribute("src", "https://cdn.pixabay.com/photo/2014/02/07/15/32/parsley-261039_640.jpg")
    }

};


const noWhitespace = document.getElementById("noWhitespace").innerHTML;
console.log(noWhitespace);
// "Dogs are silly."

const whitespace = document.getElementById("whitespace").innerHTML;
console.log(whitespace);
// "Dogs
//    are
//        silly."
