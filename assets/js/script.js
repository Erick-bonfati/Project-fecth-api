

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {

    try {
        
        const href = el.getAttribute('href') // captura o href clicado
        const linkClicado = await fetch(href) ; // carrega o link clicado

        if(linkClicado.status !== 200) throw new Error('ERRO 404'); // capturando status diferente de 200


        const html = await linkClicado.text();

        carregaResultado(html);
    } catch(e){
        console.log(e);
    }
}

function carregaResultado(linkClicado) {
    const resultado = document.querySelector('.result');
    resultado.innerHTML = linkClicado;
}