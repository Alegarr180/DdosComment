

const tabla = document.getElementsByClassName("table summary_table scratchpad-pattern-table top-traffic-patterns-table");


if (tabla) {
       

            let x = document.getElementsByClassName("table_row");
            let i;

            for (i = 0; i < x.length; i++) {
          

          var boton = document.createElement("span");
          boton.textContent = i
          boton.setAttribute('id','RW' + i)
          boton.classList.add("click")
          boton.classList.add("button")
          boton.style.fontSize = "100%";
          x[i].appendChild(boton);

    }    
    
    $(".click").click(function(e) {
        let linea = (this.id);


     let trf =  $(".chart.sptable > tbody > tr > td:nth-child(2)").first().text().replace(/\t|\n|[()]|[0-9]/gi,'');

    let ip = $("#" + linea).prev().prev().prev().prev().prev().prev().prev().prev().text().replace(/\t|\n|[A-Z]|[()]|[ ]/gi,'');

    let src = $("#" + linea).prev().prev().prev().prev().prev().text().replace(/\t|\n|[A-Z]|[()]|[ ]/gi,'');

    let dst = $("#" + linea).prev().prev().prev().text().replace(/\t|\n|[A-Z]|[()]|[ ]/gi,'');

    let text = ("Trafico " + trf + "src ip " + ip + " " + "de " + "ABUSEIP " + "// " + "src port " + src + " " + "dst port " + dst);

    console.log(text);

              
    navigator.clipboard.writeText(text);
    
    let abuse = ip.slice(0, -3);

      window.open("https://www.abuseipdb.com/check/" + abuse, "_blank");
  


});
    
    

}




