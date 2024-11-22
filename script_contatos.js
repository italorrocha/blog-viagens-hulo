document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contatoform");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Seleciona o contêiner onde o formulário está
      const formContainer = document.querySelector(".fale_conosco");
  
      // Substitui o conteúdo do contêiner pela mensagem de agradecimento
      formContainer.innerHTML = `
        <h2>Obrigado pela sua mensagem!</h2>
        <p>Recebemos a sua mensagem e entraremos em contato em breve.</p>
      `;
    });
  });
  
  
  // document.getElementById("contatoform").addEventListener("submit", function(event) {
    //event.preventDefault(); // Evita o envio padrão do formulário
    //window.location.href = "Mensagem_contatos.html"; // Altere para o link desejado
//});