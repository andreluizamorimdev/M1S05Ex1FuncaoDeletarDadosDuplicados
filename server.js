function deletaDadosDuplicados() {
    const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José'];
    
    const listaSemDuplicados = lista.filter((nome, index) => lista.indexOf(nome) === index);
    const listaDuplicados = lista.filter((nome, index) => lista.indexOf(nome) !== index);
    
    console.log(`Duplicados deletados: ${listaDuplicados}`);
    console.log(`Lista sem duplicados: ${listaSemDuplicados}`);

}
deletaDadosDuplicados();