// This is a JavaScript file
$(document).on('#click','#buscar', function(){
$.ajax({
  type:"get",
  url: "https://viacep.com.br/ws/"+$("#cep").val()+"/json/",
  successe: function(data){
    var conteudo;
    conteudo = "<p><strong>CEP:</strong>"+data.cep+"</p>";
    conteudo += "<p><strong>Cidade:</strong>"+data.cidade+"</p>";
    conteudo += "<p><strong>Bairro:</strong>"+data.bairro+"</p>";
    conteudo += "<p><strong>Estado:</strong>"+data.localidade+"</p>";
    
    $("dados").html(conteudo)
    },
    error : function (){
      alert("Deu Erro!!!");
    }
})
});
