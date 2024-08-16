let valorProduto = parseFloat(prompt('Informe o valor do produto: '))

let desconto = parseFloat(prompt('Informe a porcentagem do desconto: '))

let valorFinal = valorProduto*(1-(desconto/100))

alert('O valor do produto com desconto será R$'+valorFinal)