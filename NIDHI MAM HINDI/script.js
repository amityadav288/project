// function checkPassword() {
//     var password = prompt(" Enter Password :");
//     if (password === "8090") {
//         console.log("Welcome");
//     }
//     else {
//         alert("Your Password is Wrong ");
//         window.location.reload();
//     }
// }

// checkPassword()



let todayDate = new Date();
let formattedDate = todayDate.toLocaleDateString('hi-IN');

document.getElementById("todayDate").innerHTML = `Date :- ${formattedDate}`;

let a = document.getElementById("playlist");
let c = document.getElementById("card");

function bclick() {
    a.classList.add('fade-out')

    setTimeout(() => {


        a.innerHTML = `
        
        
        <div class="card " > <h2>Class 01</h2><p> सामान्य हिंदी </p><img src="Multimedia/class 1.png" alt="error"> <button> <a href="https://mega.nz/file/jTI30ZjB#nUDxt4M994gewgTkbD18MvEEOgRNaZGXfpKoMfftHSc" target="_blank" >Play List</a></button> </div>    
        
        <div class="card " > <h2>Class 01</h2><p> सामान्य हिंदी </p><img src="Multimedia/class 1.png" alt="error"> <button> <a href="https://mega.nz/file/jTI30ZjB#nUDxt4M994gewgTkbD18MvEEOgRNaZGXfpKoMfftHSc" target="_blank" >Play List</a></button> </div>    
        
        <div class="card " > <h2>Class 01</h2><p> सामान्य हिंदी </p><img src="Multimedia/class 1.png" alt="error"> <button> <a href="https://mega.nz/file/jTI30ZjB#nUDxt4M994gewgTkbD18MvEEOgRNaZGXfpKoMfftHSc" target="_blank" >Play List</a></button> </div>    
        
        <div class="card " > <h2>Class 01</h2><p> सामान्य हिंदी </p><img src="Multimedia/class 1.png" alt="error"> <button> <a href="https://mega.nz/file/jTI30ZjB#nUDxt4M994gewgTkbD18MvEEOgRNaZGXfpKoMfftHSc" target="_blank" >Play List</a></button> </div>    
        
        <div class="card " > <h2>Class 01</h2><p> सामान्य हिंदी </p><img src="Multimedia/class 1.png" alt="error"> <button> <a href="https://mega.nz/file/jTI30ZjB#nUDxt4M994gewgTkbD18MvEEOgRNaZGXfpKoMfftHSc" target="_blank" >Play List</a></button> </div>    
        
        <div class="card " > <h2>Class 01</h2><p> सामान्य हिंदी </p><img src="Multimedia/class 1.png" alt="error"> <button> <a href="https://mega.nz/file/jTI30ZjB#nUDxt4M994gewgTkbD18MvEEOgRNaZGXfpKoMfftHSc" target="_blank" >Play List</a></button> </div>    
        
        <div class="card " > <h2>Class 01</h2><p> सामान्य हिंदी </p><img src="Multimedia/class 1.png" alt="error"> <button> <a href="https://mega.nz/file/jTI30ZjB#nUDxt4M994gewgTkbD18MvEEOgRNaZGXfpKoMfftHSc" target="_blank" >Play List</a></button> </div>    
        
        <div class="card " > <h2>Class 01</h2><p> सामान्य हिंदी </p><img src="Multimedia/class 1.png" alt="error"> <button> <a href="https://mega.nz/file/jTI30ZjB#nUDxt4M994gewgTkbD18MvEEOgRNaZGXfpKoMfftHSc" target="_blank" >Play List</a></button> </div>    
        
        <div class="card " > <h2>Class 01</h2><p> सामान्य हिंदी </p><img src="Multimedia/class 1.png" alt="error"> <button> <a href="https://mega.nz/file/jTI30ZjB#nUDxt4M994gewgTkbD18MvEEOgRNaZGXfpKoMfftHSc" target="_blank" >Play List</a></button> </div>    
        
        <div class="card " > <h2>Class 01</h2><p> सामान्य हिंदी </p><img src="Multimedia/class 1.png" alt="error"> <button> <a href="https://mega.nz/file/jTI30ZjB#nUDxt4M994gewgTkbD18MvEEOgRNaZGXfpKoMfftHSc" target="_blank" >Play List</a></button> </div>    
        
        `
        a.classList.remove('fade-out')
    }, 500)

}


