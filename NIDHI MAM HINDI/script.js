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
        
        
        <div class="card " > <h2>Class 01</h2><p> सामान्य हिंदी </p><img src="https://mega.nz/file/7bZVQJoK#cyXnhaGaaJxSMrKmp0oCkkRqr3-EkObiZKvmFwqhTzY" alt="error"> <button> <a href="https://mega.nz/file/jTI30ZjB#nUDxt4M994gewgTkbD18MvEEOgRNaZGXfpKoMfftHSc" target="_blank" >Play Class</a></button> </div>    
        
        <div class="card " > <h2>Class 02</h2><p> क्लास 2 वर्णमाला 1</p><img src="https://mega.nz/file/2bwF3DZa#rRTE9aKaM6T6DWh1cmh8fXSJ39DQnRxccVRLiOiqy1E" alt="error"> <button> <a href="https://mega.nz/file/vT532KwQ#7kHrFPFDhiQ7vlsquJk-EkGAlknMnWg2ywNvvgWt4U8" target="_blank" >Play Cass</a></button> </div>    
        
        <div class="card " > <h2>Class 03</h2><p> क्लास 3 वर्णमाला 2</p><img src="https://mega.nz/file/DKoH1RDS#0RVOQQMYbkyn_js3yWre28ygahVuypcyuT5T8cdZ2fM" alt="error"> <button> <a href="https://mega.nz/file/vfITgDhC#wQtmwiitAnlU7lFl4VpLKo0WXo4rMn0ysRM2sGBrplU" target="_blank" >Play Cass</a></button> </div>    
 
        
        <div class="card " > <h2>Class 04</h2><p>क्लास 4 वर्णमाला 3</p><img src="https://mega.nz/file/2OBDmQjZ#T0HQ7gs7Uy7M5OXWnkjTHvYsKtmGYELW5LNs-D4yHEs" alt="error"> <button> <a href="https://mega.nz/file/iXhhFRTL#3MTEJYadtk0dRzM-Ezpp0Vxu4p8SXmLQC7F3Z2UEfe4" target="_blank" >Play Cass</a></button> </div>    
        
        <div class="card " > <h2>Class 05</h2><p>क्लास 5 वर्णमाला 4</p><img src="https://mega.nz/file/rL51mJoS#b8qGXJyxVe3tpYvdbNJPSUo4uBlv5ioPMlZ8NSXuGf0" alt="error"> <button> <a href="https://mega.nz/file/XaBE2DIQ#2Cykpa2lKwqOoDhzofVp2fpj1g4GB0sNkRtliYHXP_0" target="_blank" >Play Cass</a></button> </div>    
 
       
        `
        a.classList.remove('fade-out')
    }, 500)

}


