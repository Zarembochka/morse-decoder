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

const MORSE_SYMBOLS = {
    '00': '',
    '10': '.',
    '11': '-',
};

function decodeLetter(letter) {
    if (letter == "**********") {
        return ' ';
    }

    let result = '';
    for (let i = 0; i < 10; i += 2) {
        let symbol = letter.slice(i, i + 2);
        result += MORSE_SYMBOLS[symbol];
    }

    return MORSE_TABLE[result];
}

function decode(expr) {
    // write your solution here
    let position = 0;
    let result = '';

    while (position < expr.length) {
        let letter = expr.slice(position, position + 10);

        position += 10;
        result += decodeLetter(letter);
    }

    return result;
}

 module.exports = {
     decode
}