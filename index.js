let illegalMethod = IllegalCharacterFound

function submitBinary(){
    let binaryInput = document.getElementById("binaryInput")
    let binaryDisplay = document.getElementById("binaryDisplay")
    let input = binaryInput.value
    let chars = input.split('')
    let illegalCharacterFound = false;
    let illegalCharPos;
    let expo

    console.log(chars)

    chars.forEach(char => {
        if(char != 0 && char != 1){
            illegalCharacterFound = true;
            illegalCharacter = char
            illegalCharPos = chars.indexOf(illegalCharacter)+1  
        }
        
    });

    if(input.length != 8){
        return binaryDisplay.textContent = "Must have at least 8 characters"
    }else if(illegalCharacterFound){
        return binaryDisplay.textContent = 
        `
        Only 1's and 0's allowed. Illegal character found at character ${illegalCharPos}. The culprit was: "${illegalCharacter}"
        `   
    } else {
        return binaryDisplay.textContent = (chars[0]*Math.pow(2,7))+(chars[1]*Math.pow(2,6))+(chars[2]*Math.pow(2,5))+(chars[3]*Math.pow(2,4))+(chars[4]*Math.pow(2,3))+(chars[5]*Math.pow(2,2))+(chars[6]*Math.pow(2,1))+(chars[7]*Math.pow(2,0))
    }
}



