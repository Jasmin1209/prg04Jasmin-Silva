const form = document.getElementById("formDenuncia");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const titulo = document.getElementById("titulo").value;

    const categoria = document.getElementById("categoria").value;

    const descricao = document.getElementById("descricao").value;

    const local = document.getElementById("local").value;

    const anonima = document.getElementById("anonima").checked;

    const protocolo = gerarProtocolo();

    const denuncia = {

        titulo,
        categoria,
        descricao,
        local,
        anonima,
        protocolo,
        status:"Em análise"
    };

    salvarDenuncia(denuncia);

    mostrarMensagem(protocolo);

    form.reset();
});

function gerarProtocolo(){

    return "TRUTH-" + Math.floor(Math.random() * 999999);
}

function salvarDenuncia(denuncia){

    let denuncias =
        JSON.parse(localStorage.getItem("denuncias"))
        || [];

    denuncias.push(denuncia);

    localStorage.setItem(
        "denuncias",
        JSON.stringify(denuncias)
    );
}

function mostrarMensagem(protocolo){

    const mensagem =
        document.getElementById("mensagem");

    mensagem.innerHTML = `
        <div class="sucesso">
            Denúncia enviada com sucesso!
            <br>
            Protocolo:
            <strong>${protocolo}</strong>
        </div>
    `;
}