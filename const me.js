const me = {
    name: 'Dénizard Custodio',
    goal: 'Me tornar um professional especializado que contribua criando soluções',
    greatestQuality: 'Consigo analisar um problema de 26 formas diferentes devido à filosofia',
    studying: ['JavaScript']
}

const company = {
    hire: person => {
        if(person.name === 'Dénizard Custodio')
            console.log('Sucesso!😉')
    }
}

company.hire(me)