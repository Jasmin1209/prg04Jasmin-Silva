function analisarNoticia(){

    const texto = document
        .getElementById("newsInput")
        .value
        .toLowerCase();

    const resultado = document
        .getElementById("resultado");

    const palavrasSuspeitas = [
        "milagre",
        "compartilhe",
        "urgente",
        "100%",
        "segredo"
    ];

    let score = 0;

    palavrasSuspeitas.forEach(palavra => {
        if(texto.includes(palavra)){
            score++;
        }
    });

    if(score >= 3){
        resultado.innerHTML = `
            <p class="fake">
                Alta chance de Fake News
            </p>
        `;
    }

    else if(score >= 1){
        resultado.innerHTML = `
            <p class="warning">
                Conteúdo suspeito
            </p>
        `;
    }

    else{
        resultado.innerHTML = `
            <p class="real">
                Conteúdo aparentemente confiável
            </p>
        `;
    }
}