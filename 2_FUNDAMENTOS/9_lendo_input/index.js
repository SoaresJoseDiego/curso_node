const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readLine.question('Qual é a sua linguagem preferida?', (language) => {
    if(language === 'php'){
        console.log('Isso nem é linguagem')
    }
    else{
        console.log(`A minha linguagem preferida é: ${language}`)

    }
    readLine.close();
})

