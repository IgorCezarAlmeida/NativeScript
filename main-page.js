let cliques = 0;

function onPageLoaded(args) {
  args.object.bindingContext = {
    titulo: "Exemplo NativeScript"
  };
}

function onShowGreeting(args) {
  const page = args.object.page;
  const nomeInput = page.getViewById("nomeInput");
  const mensagemLabel = page.getViewById("mensagemLabel");
  const contadorLabel = page.getViewById("contadorLabel");
  const nome = nomeInput.text.trim();

  cliques += 1;
  mensagemLabel.text = nome
    ? `Ola, ${nome}! Este texto foi alterado pelo JavaScript.`
    : "Digite um nome para ver a saudacao.";
  contadorLabel.text = `Cliques: ${cliques}`;
}

exports.onPageLoaded = onPageLoaded;
exports.onShowGreeting = onShowGreeting;
