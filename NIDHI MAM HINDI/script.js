function checkPassword() {
    var password = prompt(" Enter Password :");
    if (password === "8090") {
        console.log("Welcome");
    }
    else {
        alert("Your Password is Wrong ");
        window.location.reload();
    }
}

checkPassword()



let todayDate = new Date();
let formattedDate = todayDate.toLocaleDateString('hi-IN');

document.getElementById("todayDate").innerHTML = `Date :- ${formattedDate}`;

let a = document.getElementById("playlist");
let c = document.getElementById("card");

function bclick() {
    a.classList.add('fade-out')

    setTimeout(() => {


        a.innerHTML = `
        
        
        <div class="card " > <h2>Class 01</h2><p> सामान्य हिंदी </p><img src="Multimedia/class 1.png" alt="error"> <button> <a href="https://mega.nz/file/jTI30ZjB#nUDxt4M994gewgTkbD18MvEEOgRNaZGXfpKoMfftHSc" target="_blank" >Play Class</a></button> </div>    
        
        <div class="card " > <h2>Class 02</h2><p> क्लास 2 वर्णमाला 1</p><img src="Multimedia/class 2.png" alt="error"> <button> <a href="https://mega.nz/file/vT532KwQ#7kHrFPFDhiQ7vlsquJk-EkGAlknMnWg2ywNvvgWt4U8" target="_blank" >Play Cass</a></button> </div>    
        
        <div class="card " > <h2>Class 03</h2><p> क्लास 3 वर्णमाला 2</p><img src="Multimedia/class 3.png" alt="error"> <button> <a href="https://mega.nz/file/vfITgDhC#wQtmwiitAnlU7lFl4VpLKo0WXo4rMn0ysRM2sGBrplU" target="_blank" >Play Cass</a></button> </div>    
 
       
        `
        a.classList.remove('fade-out')
    }, 500)

}


