const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('**********');
    let outstr = "";
    for (let name of arr) {
        
        for(let i1 = 0; i1<String(name).length; i1+=10)
        {
            let arr1 = "";
        for(let i = 0; i<10; i+=2)
        {           
            let letter = name[i+i1]+name[i+i1+1];   
            if(letter == "10")
            {
                arr1+=".";
            }
            else if(letter == "11")
            {
                arr1+="-";
            }            
        }
        outstr += MORSE_TABLE[arr1];
        }
        outstr += " ";
    }
    outstr = outstr.substr(0,outstr.length-1);
    return (outstr);
}

module.exports = {
    decode
}