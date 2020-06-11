 function rodar() {
    //imagem é trocada pelo gif
    document.getElementById('box1').src = 'content/img/roleta.gif';
    document.getElementById('box2').src = 'content/img/roleta.gif';
    document.getElementById('box3').src = 'content/img/roleta.gif';
    
    //gera um icone aleatorio e substitui o gif pelo tempo determinado
    var iconsAleatory = new Array("content/img/asp-net-icon.png",
                            "content/img/ionic-icon.png",
                            "content/img/css-icon.png",
                            "content/img/html5-icon.png",
                            "content/img/javascript-icon.png",
                            "content/img/php-icon.png",
                            "content/img/python-icon.png",
                            "content/img/react-native-icon.png",
                            "content/img/swift-icon.png");
                            
    var aleatoryNum1 = Math.floor(Math.random() * 9);
        var icons1 = iconsAleatory[aleatoryNum1]
        setTimeout(function() { 
            document.getElementById('box1').src = icons1
        }, 3000);

    var aleatoryNum2 = Math.floor(Math.random() * 9);
        var icons2 = iconsAleatory[aleatoryNum2]
        setTimeout(function() { 
            document.getElementById('box2').src = icons2
        }, 4000);

    var aleatoryNum3 = Math.floor(Math.random() * 9);
        var icons3 = iconsAleatory[aleatoryNum3]
        setTimeout(function() { 
            document.getElementById('box3').src = icons3
        }, 5000);

        setTimeout(function() { 
            if ( icons1 == icons2 && icons2 == icons3){
                document.getElementById('msg-ganhou').style.display = "block";
            }
            else{
                document.getElementById('msg-perdeu').style.display = "block";
            }
        }, 5300);  

    

        
              

}