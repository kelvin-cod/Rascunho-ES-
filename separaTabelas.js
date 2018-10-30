function botao() {
    str = document.getElementById('Input').value
    str = str.replace(/,/g, ".")
    vet100 = str.split(' ').map(Number);
    console.log(vet100)

    return vet100
}