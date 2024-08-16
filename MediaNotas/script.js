let nota1 = parseFloat(prompt('Nota 1: '));
let nota2 = parseFloat(prompt('Nota 2: '));
let nota3 = parseFloat(prompt('Nota 3: '));

function media(a,b,c) {
    let mediaNotas = (nota1+nota2+nota3)/3;
    alert(mediaNotas)
}

media('Media: '+nota1,nota2,nota3)