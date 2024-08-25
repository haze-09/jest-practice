function capitalize(string){    
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); 
}

function reverseString(string){
    return string.split("").reverse().join("");
}

export {capitalize,reverseString};