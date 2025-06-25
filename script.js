function enviarLetra() {
  let letraDoUsuario = document.getElementById("letra").value;
  letraDoUsuario = letraDoUsuario.toUpperCase();

  if (letraDoUsuario === "") {
    document.getElementById(
      "fraseDaLetra"
    ).innerText = `Tá com medo, mona? Ninguém tá vendo, pode se soltar! Digita pelo menos o S de simpatizante, vai!`;
    return;
  }

  let mensagemFinal = "";
  switch (letraDoUsuario) {
    case "L":
      mensagemFinal = `L de Lésbica?
Você é uma mulher que se interessa por outras mulheres. Sapatona convicta, caminhoneira emocional, que na infância tinha uma tesourinha e um propósito. O mundo precisa de você organizando planilhas, desmontando armários e dominando a arte de não dar moral pra macho.`;
      break;

    case "G":
      mensagemFinal = `G de Gay?
Mana, você é a alma da festa, do drama e do date que termina em café da manhã. Gay de shortinho curto ou de cropped, tanto faz: o importante é que você sabe quem é e brilha com orgulho. Às vezes insegura, sempre interessante. E sim: você *sabe dançar*.`;
      break;

    case "B":
      mensagemFinal = `B de Bissexual?
Panela velha ou frigideira nova? Você quer é o fogão inteiro! Seu coração bate por mais de um gênero, e isso não é indecisão, é abundância emocional! Não deixe ninguém apagar sua letra só porque o sistema binário pira no colapso da sua liberdade, adinal, B nunca foi só de Beyoncé!`;
      break;

    case "T":
      mensagemFinal = `T de Trans ou Travesti?
Você é potência, é identidade vivida com coragem. Transfobia se combate com sua existência, e sua existência é linda. Seja você um homem trans, mulher trans ou pessoa trans não-binária, você é a revolução que o mundo precisa ver e respeitar.`;

      break;
    case "Q":
      mensagemFinal = `Q de Queer?
Você é fluidez, é bagunça criativa, é identidade em expansão. Queer é o nome da resistência sem rótulo fixo, da bicha que cansou de explicação e quer viver. Você desafia estruturas e constrói um mundo onde o "ser" é mais importante que o "parecer".`;

      break;
    case "I":
      mensagemFinal = `I de Intersexo?
Você mostra que a biologia é diversa, complexa e que o binarismo é preguiçoso. Seu corpo é lindo, político e não precisa caber numa caixinha rosa ou azul. Obrigado por existir e abrir os olhos de tanta gente pro que significa *ser humano*.`;

      break;
    case "A":
      mensagemFinal = `A de Assexual ou Arromântico?
Você é o lembrete de que afeto não depende de tesão. Você ama (ou não) do seu jeito, e tá tudo certo. O mundo precisa entender que nem todo toque é desejo e nem todo romance é obrigação. E sim, você pode ser dramática e ainda assim ser ace. Lacre!`;

      break;
    case "P":
      mensagemFinal = `P de Pansexual?
Você ama gente, não gênero. Pra você, o coração bate no ritmo da conexão, não do genital. E se alguém perguntar “mas então qual a diferença entre pan e bi?”, respira fundo, conta até três e decide se explica ou se sorria e acena.`;

      break;
    case "N":
      mensagemFinal = `N de Não-binárie?
Você é um tapa de luva de pelica no gênero binário. Você existe entre, fora, através — e tudo isso ao mesmo tempo. A sua presença desafia o que ensinaram na escola e inspira quem tá buscando se entender. Você é pluralidade em carne, osso e close.`;

      break;
    case "+":
      mensagemFinal = `+ de Outras identidades?
Você representa o infinito: agênero, demi, dois-espíritos, polissexuais, e muito mais. Cada identidade é um universo, e o + é a bandeira de quem ainda não cabe em nenhuma sigla, mas existe, resiste e exige ser visto.`;

      break;

    case "S":
      mensagemFinal = `S de Simpatizante?
Mãe, pai, irmão, amiga de infância, colega do trabalho, vizinha fofoqueira que agora é aliada — você mostra com orgulho que a pessoa que você ama não está sozinha na luta.  
Você não vive a dor na pele, mas se posiciona, apoia, compartilha link de petição e ainda vai junto pra parada com glitter no rosto e cartaz bem escrito.  
Só não vale dizer que “tem até amigos que são” e depois votar contra, hein? Se for pra lacrar, que seja com coerência.`;
      break;

    default:
      mensagemFinal = `Letra não reconhecida?
Isso aqui é um espaço de acolhimento. Seja qual for sua identidade, você é bem-vinde, respeitade e importante. O mundo real já é cruel demais — aqui a gente só quer te ver brilhar.`;
  }

  document.getElementById("fraseDaLetra").innerText = mensagemFinal;
}
