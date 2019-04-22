


function check(){
    let names = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;


    const regExName = /^[a-z]{5}$/gi;
    const regExphone = /^[0-9]{10}$/;

    const matchName = regExName.exec(names);
    const matchphone = regExphone.exec(phone);


    if(matchName){
        let disName = matchName[0];
        console.log(disName);
    }else{
        console.log("No match");
    }
    
    if(matchphone){
        let disPhone = matchphone[0];
        console.log(disPhone);
    }else{
        console.log("No match");
    }
}