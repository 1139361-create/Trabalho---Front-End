Trabalho G1 - Front-End

Nomes: Arthur Saggin (1139361) e João Isaque (1139559)
Disciplina: Front-End
Professor: Matheus Henrique Barquette
Site de referência: https://www.netflix.com/br/login?serverState=BgjUv%2BvcAxK1AXcu%2Bv%2FQvkGyFLLSYKnuwmvOhZEb1eqR7niInVwZxPiMTox6UuG4bbtRMdlTq2A7JrybJ%2BjYmOnrhFn8YGGn%2FNwjwYXX9Z0aWF9XL%2BzH%2FHGafa6xfJzwjqISMQaz2w7BSOR4mMlpfTTQ0SrSyQGLv1w8LUUReQXXujfLaZjCrkizNqIZnWDLK%2FIyrYoNOR5m4BfiWlRjd%2BOpZBK3Rrpk0vRCDxqVcw6RpdH8MZhlaJpxpfzMn7QYBiIOCgxJGl9XWaQ1vSlxX1A%3D

Este projeto é uma reprodução visual e estrutural da página de login de referência acima, desenvolvida para fins exclusivamente acadêmicos, como parte da avaliação G1 da disciplina de Front-End. Não possui qualquer vínculo com o site original, não envia, armazena ou processa dados reais de usuários — todo o comportamento do formulário é simulado no lado do cliente (JavaScript), sem comunicação com servidores externos.

Estrutura HTML semântica e acessível
- Uso de tags semânticas: `<header>`, `<main>`, `<section>`, `<form>`
  - Justificativa: Usamos `<header>` para agrupar a logo do site no topo da página; `<main>` para envolver o conteúdo principal (a área de login), já que é o bloco central e único da página; `<section>` dentro do `<main>` para delimitar o box de login (`login-box`), separando-o semanticamente do restante; e `<form>` para agrupar os campos de entrada e o botão de envio, permitindo validação nativa e semântica correta para leitores de tela.
  
- Formulário acessível com `label` associado a cada campo
  - Justificativa: O campo de e-mail/celular possui um `<label for="email">` associado ao `id` do input correspondente, garantindo que leitores de tela identifiquem corretamente o propósito do campo. Também utilizei `<span class="error-message" role="alert">` para que mensagens de erro geradas pelo JavaScript sejam anunciadas automaticamente por tecnologias assistivas.


- Testado em celular e desktop


Personalização e originalidade
- Alteração de cor da pagina de login de vermelho para azul
  

Tecnologias utilizadas
- HTML
- CSS
- JavaScript
