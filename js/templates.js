
export function inicioTemplate() {
  return `
    <div class="container">
      
      <section style="grid-column: 1 / -1; text-align: center; padding: var(--space-4); background: var(--color-neutral-100); border-radius: 8px;">
        <h2>Amor e Esperança para cada patinha</h2>
        <p>Somos uma ONG dedicada ao resgate, cuidado e adoção responsável de cães em situação de rua.</p>
        <img src="https://images.unsplash.com/photo-1560807707-8cc77767d783" alt="Cachorro sendo acariciado" style="width: 100%; max-width: 600px; border-radius: 8px; margin-top: var(--space-2);">
      </section>

      <section style="grid-column: 1 / -1; margin-top: var(--space-3);">
        <h2>Nossa Missão</h2>
        <p>Promover o bem-estar animal e a conscientização sobre adoção responsável, criando conexões entre pessoas e seus futuros companheiros fiéis.</p>
      </section>

      <section style="grid-column: 1 / -1; margin-top: var(--space-3);">
        <h2>Nossos Momentos</h2>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-2);">
          <img src="imagens/img4.jpg" alt="Cachorros em um abrigo" class="card" style="padding:0; height: 200px; object-fit: cover;">
          <img src="imagens/img5.jpg" alt="Cachorro com placa Take me Home" class="card" style="padding:0; height: 200px; object-fit: cover;">
          <img src="imagens/img6.jpg" alt="Cachorro deitado ao sol" class="card" style="padding:0; height: 200px; object-fit: cover;">
          <img src="imagens/abrigo1.jpg" alt="Cachorro recebendo carinho" class="card" style="padding:0; height: 200px; object-fit: cover;">
        </div>
      </section>
      
      <section style="grid-column: 1 / -1; margin-top: var(--space-3);">
        <h2>Contato</h2>
        <p>Email: contato@caopanheiros.org.br</p>
        <p>Telefone: (11) 99876-5432</p>
        <p>Endereço: Rua Esperança, 42 - São Paulo, SP</p>
      </section>
    </div>
  `;
}

export function projetosTemplate() {
  return `
    <div class="container">
      <h2 style="grid-column: 1 / -1;">Nossos Projetos</h2>
      
      <div class="card" style="grid-column: span 4;">
        <img src="imagens/img1.jpg" alt="Cachorro resgatado" style="height: 300px; object-fit: cover;">
        <div class="card-content">
          <h3>Resgate e Reabilitação</h3>
          <p>Resgatamos cães abandonados, cuidamos da saúde e preparamos cada um para um novo lar cheio de amor.</p>
        </div>
      </div>

      <div class="card" style="grid-column: span 4;">
        <img src="imagens/img2.jpg" alt="Feira de adoção" style="height: 300px; object-fit: cover;">
        <div class="card-content">
          <h3>Feiras de Adoção</h3>
          <p>Realizamos eventos mensais para aproximar futuros tutores e nossos amiguinhos prontos para adoção.</p>
        </div>
      </div>

      <div class="card" style="grid-column: span 4;">
        <img src="imagens/img3.jpg" alt="Voluntário cuidando de cachorro" style="height: 300px; object-fit: cover;">
        <div class="card-content">
          <h3>Voluntariado</h3>
          <p>Venha fazer parte da nossa equipe! Oferecemos oportunidades de voluntariado em resgates, cuidados e eventos.</p>
        </div>
      </div>
    </div>
  `;
}

export function cadastroTemplate() {
  return `
    <div class="container">
      <section style="
          grid-column: 3 / 11; 
          background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('imagens/img5.jpg');
          background-size: cover;
          background-position: center center;
          padding: var(--space-3); 
          border-radius: 8px; 
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        "> 
        
        <h2>Cadastro de Voluntário ou Doador</h2>
        
        <form id="cadastro-form" novalidate>
          <fieldset>
            <legend>Informações Pessoais</legend>

            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" required>
            <p class="error-message" data-for="nome"></p>

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>
            <p class="error-message" data-for="email"></p>

            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" required>
            <p class="error-message" data-for="cpf"></p>

            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>
            <p class="error-message" data-for="telefone"></p>

            <label for="data">Data de Nascimento:</label>
            <input type="date" id="data" name="data" required>
            <p class="error-message" data-for="data"></p>

            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" required>
            <p class="error-message" data-for="endereco"></p>

            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" pattern="\\d{5}-\\d{3}" placeholder="00000-000" required>
            <p class="error-message" data-for="cep"></p>

            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" required>
            <p class="error-message" data-for="cidade"></p>

            <label for="estado">Estado:</label>
            <input type="text" id="estado" name="estado" maxlength="2" placeholder="SP" required>
            <p class="error-message" data-for="estado"></p>
          </fieldset>

          <fieldset>
            <legend>Interesse</legend>
            <label><input type="radio" name="tipo" value="voluntario" required> Voluntário</label>
            <label><input type="radio" name="tipo" value="doador"> Doador</label>
            <p class="error-message" data-for="tipo"></p>
          </fieldset>

          <button type="submit">Enviar Cadastro</button>
        </form>
      </section>
    </div>
  `;
}