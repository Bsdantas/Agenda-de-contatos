document.addEventListener("DOMContentLoaded", function () {
  const formCadastro = document.getElementById("formCadastro");
  const tabelaContatos = document.getElementById("tabelaContatos").getElementsByTagName("tbody")[0];

  function formatarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');
    telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    return telefone;
  }

  document.getElementById("telefone").addEventListener("input", function (e) {
    e.target.value = formatarTelefone(e.target.value);
  });

  formCadastro.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    if (nome && telefone) {
      const newRow = tabelaContatos.insertRow();
      newRow.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
        <td><button class="delete-btn">&#128465;</button></td>
      `;

      newRow.querySelector(".delete-btn").addEventListener("click", function () {
        newRow.remove();
      });

      formCadastro.reset();
    }
  });
});
