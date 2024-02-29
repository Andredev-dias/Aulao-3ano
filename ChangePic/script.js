function changeImage(){
    const html = document.documentElement;
    html.classList.toggle("light")

    var imagem = document.querySelector('#profile');
    var btn = document.getElementById("btnStyle");
    var dt = document.getElementById("data");

    var registro = new Date();
    dt = formatarData(registro);
    
    if(html.classList.contains("light")){
        imagem.setAttribute("src", "./Imagens/pic1.jpg");
    }else{
        imagem.setAttribute("src", "./Imagens/pic2.avif");
    }
}

function formatarData(item){
    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    return item.toLocaleString("pt-BR", options)
}