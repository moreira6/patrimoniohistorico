
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const perguntas = [
  {
    nome: "Cristo Redentor",
    pistas: [
      "Sou um dos monumentos mais conhecidos do Brasil.",
      "Fico em uma cidade famosa por suas praias.",
      "Estou no alto do Morro do Corcovado, no Rio de Janeiro."
    ],
    opcoes: ["Cristo Redentor", "Torre Eiffel", "Coliseu", "Big Ben"],
    correta: 0,
    explicacao: "O Cristo Redentor foi inaugurado em 1931, no Rio de Janeiro."
  },
  {
    nome: "Torre Eiffel",
    pistas: [
      "Sou uma construção muito famosa na Europa.",
      "Fui inaugurada em 1889.",
      "Sou um dos principais símbolos de Paris, na França."
    ],
    opcoes: ["Big Ben", "Torre Eiffel", "Coliseu", "Taj Mahal"],
    correta: 1,
    explicacao: "A Torre Eiffel foi construída para a Exposição Universal de Paris de 1889."
  },
  {
    nome: "Estátua da Liberdade",
    pistas: [
      "Sou um monumento muito conhecido.",
      "Seguro uma tocha e fico em uma ilha.",
      "Sou um dos símbolos de Nova York, nos Estados Unidos."
    ],
    opcoes: ["Cristo Redentor", "Estátua da Liberdade", "Muralha da China", "Big Ben"],
    correta: 1,
    explicacao: "A Estátua da Liberdade foi um presente da França aos Estados Unidos."
  },
  {
    nome: "Coliseu",
    pistas: [
      "Sou uma construção muito antiga.",
      "Na Antiguidade, recebia grandes espetáculos.",
      "Fico em Roma, na Itália."
    ],
    opcoes: ["Coliseu", "Taj Mahal", "Torre Eiffel", "Parthenon"],
    correta: 0,
    explicacao: "O Coliseu é um dos monumentos mais conhecidos da Roma Antiga."
  },
  {
    nome: "Muralha da China",
    pistas: [
      "Sou uma construção muito extensa.",
      "Fui construída ao longo de muitos séculos para ajudar na defesa de territórios.",
      "Meu nome revela o país onde estou."
    ],
    opcoes: ["Muralha da China", "Pirâmides do Egito", "Machu Picchu", "Torre Eiffel"],
    correta: 0,
    explicacao: "A Grande Muralha é formada por vários trechos construídos em diferentes épocas."
  },
  {
    nome: "Pirâmides do Egito",
    pistas: [
      "Sou parte de um conjunto de construções muito antigas.",
      "Fui construída no tempo dos faraós.",
      "Tenho formato triangular e fico no Egito."
    ],
    opcoes: ["Pirâmides do Egito", "Coliseu", "Taj Mahal", "Machu Picchu"],
    correta: 0,
    explicacao: "As pirâmides foram construídas no Egito Antigo."
  },
  {
    nome: "Taj Mahal",
    pistas: [
      "Sou um edifício histórico localizado na Ásia.",
      "Fui construído como homenagem à memória de uma pessoa querida.",
      "Sou famoso pelo mármore branco e fico na Índia."
    ],
    opcoes: ["Taj Mahal", "Big Ben", "Coliseu", "Cristo Redentor"],
    correta: 0,
    explicacao: "O Taj Mahal foi construído no século XVII, na Índia."
  },
  {
    nome: "Big Ben",
    pistas: [
      "Sou um símbolo de uma capital europeia.",
      "Sou associado a um famoso relógio.",
      "Estou junto ao Parlamento, em Londres."
    ],
    opcoes: ["Torre Eiffel", "Big Ben", "Coliseu", "Taj Mahal"],
    correta: 1,
    explicacao: "Big Ben é o apelido do grande sino do relógio do Parlamento britânico."
  },
  {
    nome: "Machu Picchu",
    pistas: [
      "Sou um sítio histórico da América do Sul.",
      "Fui construída pelo povo inca.",
      "Estou localizada nas montanhas do Peru."
    ],
    opcoes: ["Machu Picchu", "Ouro Preto", "Muralha da China", "Pelourinho"],
    correta: 0,
    explicacao: "Machu Picchu é uma antiga cidade inca localizada nos Andes peruanos."
  },
  {
    nome: "Cidade de Goiás",
    pistas: [
      "Sou uma cidade histórica brasileira.",
      "Fico no estado de Goiás e já fui sua antiga capital.",
      "Tenho ruas de pedra, casarões antigos e ligação com Cora Coralina."
    ],
    opcoes: ["Goiânia", "Pirenópolis", "Cidade de Goiás", "Anápolis"],
    correta: 2,
    explicacao: "O centro histórico da Cidade de Goiás é Patrimônio Mundial da UNESCO desde 2001."
  },
  {
    nome: "Ouro Preto",
    pistas: [
      "Sou uma cidade histórica brasileira.",
      "Fiquei muito importante durante o ciclo do ouro.",
      "Tenho igrejas e construções coloniais em Minas Gerais."
    ],
    opcoes: ["Ouro Preto", "Salvador", "Brasília", "Manaus"],
    correta: 0,
    explicacao: "O centro histórico de Ouro Preto é Patrimônio Mundial desde 1980."
  },
  {
    nome: "Brasília",
    pistas: [
      "Sou a capital de um país da América do Sul.",
      "Fui planejada e inaugurada em 1960.",
      "Tenho construções famosas projetadas por Oscar Niemeyer."
    ],
    opcoes: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    correta: 1,
    explicacao: "Brasília foi inaugurada em 21 de abril de 1960."
  },
  {
    nome: "Pelourinho",
    pistas: [
      "Sou uma área histórica de uma capital brasileira.",
      "Tenho ruas de pedra e casarões coloridos.",
      "Fico em Salvador, na Bahia."
    ],
    opcoes: ["Pelourinho", "Ouro Preto", "Cidade de Goiás", "Curitiba"],
    correta: 0,
    explicacao: "O Pelourinho faz parte do Centro Histórico de Salvador."
  },
  {
    nome: "Teatro Amazonas",
    pistas: [
      "Sou um edifício cultural muito conhecido no Brasil.",
      "Fui inaugurado durante o período da riqueza da borracha.",
      "Fico em Manaus, no Amazonas."
    ],
    opcoes: ["Teatro Amazonas", "Cristo Redentor", "Museu do Ipiranga", "Palácio do Planalto"],
    correta: 0,
    explicacao: "O Teatro Amazonas foi inaugurado em 1896."
  },
  {
    nome: "Cataratas do Iguaçu",
    pistas: [
      "Sou uma paisagem natural muito famosa.",
      "Tenho muitas quedas de água.",
      "Fico na fronteira entre Brasil e Argentina."
    ],
    opcoes: ["Cataratas do Iguaçu", "Machu Picchu", "Pantanal", "Fernando de Noronha"],
    correta: 0,
    explicacao: "As Cataratas do Iguaçu são um patrimônio natural compartilhado pelo Brasil e pela Argentina."
  },
  {
    nome: "Olinda",
    pistas: [
      "Sou uma cidade histórica brasileira.",
      "Sou conhecida por ladeiras e construções coloridas.",
      "Fico em Pernambuco, perto de Recife."
    ],
    opcoes: ["Olinda", "Ouro Preto", "Goiânia", "Brasília"],
    correta: 0,
    explicacao: "O centro histórico de Olinda é Patrimônio Mundial desde 1982."
  },
  {
    nome: "Partenon",
    pistas: [
      "Sou uma construção muito antiga da Europa.",
      "Fui construído na Grécia Antiga.",
      "Fico na Acrópole de Atenas."
    ],
    opcoes: ["Partenon", "Coliseu", "Big Ben", "Taj Mahal"],
    correta: 0,
    explicacao: "O Partenon é um templo da Grécia Antiga dedicado à deusa Atena."
  },
  {
    nome: "Stonehenge",
    pistas: [
      "Sou um monumento pré-histórico.",
      "Sou formado por grandes pedras organizadas em círculo.",
      "Fico na Inglaterra."
    ],
    opcoes: ["Stonehenge", "Muralha da China", "Coliseu", "Torre Eiffel"],
    correta: 0,
    explicacao: "Stonehenge é um monumento pré-histórico formado por grandes pedras."
  },
  {
    nome: "Círio de Nazaré",
    pistas: [
      "Sou uma manifestação cultural e religiosa brasileira.",
      "Reúno muitas pessoas em uma celebração anual.",
      "Aconteço em Belém, no Pará."
    ],
    opcoes: ["Círio de Nazaré", "Carnaval de Olinda", "Festa do Divino", "Festa Junina"],
    correta: 0,
    explicacao: "O Círio de Nazaré é uma celebração tradicional de Belém e patrimônio cultural imaterial."
  },
  {
    nome: "Capoeira",
    pistas: [
      "Sou uma expressão cultural brasileira.",
      "Misturo movimentos corporais, música e ritmo.",
      "Tenho roda, instrumentos e canto."
    ],
    opcoes: ["Capoeira", "Samba de roda", "Frevo", "Balé"],
    correta: 0,
    explicacao: "A capoeira é uma expressão cultural afro-brasileira que reúne luta, dança, música e jogo."
  }
];

function App() {
  const [tela, setTela] = useState("inicio");
  const [nome, setNome] = useState("");
  const [rodada, setRodada] = useState(0);
  const [pista, setPista] = useState(0);
  const [resposta, setResposta] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [pontos, setPontos] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [ranking, setRanking] = useState([]);

  const pergunta = perguntas[rodada];

  function iniciar() {
    if (nome.trim().length < 2) return;
    setRodada(0);
    setPista(0);
    setResposta(null);
    setResultado(null);
    setPontos(0);
    setAcertos(0);
    setTela("jogo");
  }

  function confirmar() {
    if (resposta === null || resultado !== null) return;

    const acertou = Number(resposta) === pergunta.correta;
    const ganhou = acertou ? 10 - pista : 0;

    setPontos(p => p + ganhou);
    if (acertou) setAcertos(a => a + 1);
    setResultado({ acertou, ganhou });
  }

  function proxima() {
    if (rodada === perguntas.length - 1) {
      const final = {
        nome: nome.trim(),
        pontos,
        acertos,
        data: new Date().toLocaleString("pt-BR")
      };

      const lista = JSON.parse(
        localStorage.getItem("detetives-ranking") || "[]"
      );

      lista.push(final);
      localStorage.setItem("detetives-ranking", JSON.stringify(lista));
      setRanking(lista);
      setTela("final");
      return;
    }

    setRodada(r => r + 1);
    setPista(0);
    setResposta(null);
    setResultado(null);
  }

  function mostrarRanking() {
    const lista = JSON.parse(
      localStorage.getItem("detetives-ranking") || "[]"
    );

    lista.sort((a, b) => b.pontos - a.pontos || b.acertos - a.acertos);
    setRanking(lista);
    setTela("ranking");
  }

  return (
    <div className="app">
      <header>
        <button className="logo" onClick={() => setTela("inicio")}>
          🏛️ DETETIVES DA HISTÓRIA
        </button>
        <span>DESAFIO DO 5º ANO</span>
      </header>

      {tela === "inicio" && (
        <main className="inicio">
          <div className="selo">MISSÃO ESPECIAL · PATRIMÔNIO HISTÓRICO</div>
          <h1>O passado tem pistas!</h1>
          <p>
            Descubra monumentos, cidades e tradições que contam histórias.
            Use sua inteligência e conquiste pontos!
          </p>
          <div className="resumo">
            <div><b>20</b><span>DESAFIOS</span></div>
            <div><b>3</b><span>PISTAS</span></div>
            <div><b>200</b><span>PONTOS</span></div>
          </div>
          <button className="botao principal" onClick={() => setTela("cadastro")}>
            COMEÇAR MISSÃO →
          </button>
          <button className="botao link" onClick={mostrarRanking}>
            🏆 VER RANKING
          </button>
        </main>
      )}

      {tela === "cadastro" && (
        <main className="caixa">
          <div className="selo">IDENTIFICAÇÃO DO DETETIVE</div>
          <h2>Qual é o seu nome?</h2>
          <p>Digite seu nome para participar da competição.</p>
          <input
            value={nome}
            maxLength={30}
            onChange={e => setNome(e.target.value)}
            placeholder="Digite seu nome"
            onKeyDown={e => e.key === "Enter" && iniciar()}
          />
          <button className="botao principal" disabled={nome.trim().length < 2} onClick={iniciar}>
            ENTRAR NO JOGO →
          </button>
        </main>
      )}

      {tela === "jogo" && (
        <main className="jogo">
          <div className="cabecalho-jogo">
            <div>
              <span className="selo">INVESTIGAÇÃO EM ANDAMENTO</span>
              <h2>Olá, {nome}!</h2>
            </div>
            <div className="placar-pessoal">
              <span>SUA PONTUAÇÃO</span>
              <b>{pontos} pts</b>
            </div>
          </div>

          <div className="progresso">
            <span>DESAFIO {rodada + 1} DE 20</span>
            <div><i style={{ width: `${((rodada + 1) / 20) * 100}%` }} /></div>
          </div>

          <section className="pergunta">
            <div className="pergunta-topo">
              <span>🏛️ DOSSIÊ HISTÓRICO</span>
              <h1>Quem sou eu?</h1>
              <p>Leia as pistas e descubra o patrimônio!</p>
            </div>

            <div className="pistas">
              {pergunta.pistas.slice(0, pista + 1).map((texto, i) => (
                <div className="pista" key={i}>
                  <b>PISTA {i + 1}</b>
                  <p>{texto}</p>
                  <strong>{10 - i} PONTOS</strong>
                </div>
              ))}
            </div>

            {!resultado && (
              <>
                <h3>ESCOLHA SUA RESPOSTA</h3>
                <div className="opcoes">
                  {pergunta.opcoes.map((opcao, i) => (
                    <button
                      key={opcao}
                      className={resposta === i ? "opcao selecionada" : "opcao"}
                      onClick={() => setResposta(i)}
                    >
                      <span>{String.fromCharCode(65 + i)}</span>
                      {opcao}
                    </button>
                  ))}
                </div>

                <div className="acoes">
                  {pista < 2 && (
                    <button className="botao secundario" onClick={() => setPista(p => p + 1)}>
                      REVELAR OUTRA PISTA
                    </button>
                  )}
                  <button className="botao principal" disabled={resposta === null} onClick={confirmar}>
                    CONFIRMAR RESPOSTA
                  </button>
                </div>
              </>
            )}

            {resultado && (
              <div className={resultado.acertou ? "feedback certo" : "feedback errado"}>
                <h2>{resultado.acertou ? `🎉 Muito bem! +${resultado.ganhou} pontos` : "Que pena! Não foi dessa vez."}</h2>
                <h3>Resposta: {pergunta.nome}</h3>
                <p>{pergunta.explicacao}</p>
                <button className="botao principal" onClick={proxima}>
                  {rodada === 19 ? "VER RESULTADO FINAL →" : "PRÓXIMO DESAFIO →"}
                </button>
              </div>
            )}
          </section>
        </main>
      )}

      {tela === "final" && (
        <main className="caixa final">
          <div className="trofeu">🏆</div>
          <span className="selo">MISSÃO CONCLUÍDA</span>
          <h2>Parabéns, {nome}!</h2>
          <p>Você terminou os 20 desafios!</p>
          <div className="pontuacao-final">
            <span>SUA PONTUAÇÃO</span>
            <b>{pontos}<small>/200</small></b>
            <span>{acertos} respostas corretas de 20</span>
          </div>
          <button className="botao principal" onClick={mostrarRanking}>
            VER RANKING 🏆
          </button>
          <button className="botao secundario" onClick={() => {setNome("");setTela("cadastro");}}>
            JOGAR NOVAMENTE
          </button>
        </main>
      )}

      {tela === "ranking" && (
        <main className="caixa ranking">
          <span className="selo">CLASSIFICAÇÃO GERAL</span>
          <h2>🏆 Ranking dos detetives</h2>
          {ranking.length === 0 ? (
            <p>Ainda não há participantes. Seja o primeiro a jogar!</p>
          ) : (
            ranking
              .sort((a, b) => b.pontos - a.pontos || b.acertos - a.acertos)
              .map((aluno, i) => (
                <div className="linha-ranking" key={i}>
                  <b>{i + 1}º</b>
                  <span>{aluno.nome}</span>
                  <strong>{aluno.pontos} pontos</strong>
                </div>
              ))
          )}
          <button className="botao principal" onClick={() => setTela("inicio")}>
            VOLTAR AO INÍCIO
          </button>
        </main>
      )}

      <footer>DETETIVES DA HISTÓRIA · APRENDER TAMBÉM É INVESTIGAR</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
