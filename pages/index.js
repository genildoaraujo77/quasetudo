import React from 'react'
import Head from '../components/Head'
import MelhorEnvio from '../integracoes/MelhorEnvio'

const Home = () => {
  return (
    <>
      <Head />
        <body>
              <header className="cabecalho container">
                <img src="../static/img/logo.svg" alt="Logo da Apeperia" className="cabecalho__logo" />
                <nav className="cabecalho__navegacao">
                  <ul>
                    <li className="cabecalho__link"><a href="#">Sobre</a></li>
                    <li className="cabecalho__link"><a href="#">Planos</a></li>
                    <li className="cabecalho__link"><a href="#">Blog</a></li>
                    <li className="cabecalho__link"><a href="#">Destaques</a></li>
                    <li className="cabecalho__link"><a href="#">Institucional</a></li>
                    <li className="cabecalho__link"><a href="#">Contato</a></li>
                  </ul>
                </nav>
              </header>
              <main>
    <section className="chamada container">
      <h1 className="chamada__titulo">Meu Site</h1>
      <p className="chamada__texto">Meu Site é totalmente responsivo e se adapta a qualquer tipo de tela.</p>
      <a href="#" className="chamada__botao botao">Conheça os planos</a>
    </section>
    <section className="destaques container">
      <h2 className="destaques__titulo">Destaques</h2>
      <a href="#">
        <figure className="destaques__painel">
          <img src="../static/img/comecando-criar-logotipo.png" alt="Painel do post sobre criação de logotipo"
            className="destaques__painel-imagem" />
          <figcaption className="destaques__painel-texto">Conheça as primeiras etapas para a criação de um logotipo
          </figcaption>
        </figure>
      </a>
      <a href="#">
        <figure className="destaques__painel">
          <img src="../static/img/dicas-fotografia.png" alt="Painel do post sobre fotografia com celular"
            className="destaques__painel-imagem" />
          <figcaption className="destaques__painel-texto">Veja dicas de como fotografar usando seu celular</figcaption>
        </figure>
      </a>
      <a href="#" className="destaques__botao botao">Receber destaques por email</a>
    </section>
    <section className="diferenciais container">
      <ul className="diferenciais__lista">
        <li className="diferenciais__item diferenciais__item--tempo">
          <h2 className="item__titulo">Tempo</h2>
          <p className="item__texto">Tempo é importante! Trabalhamos em ritmo acelerado, atendendo rigorosamente aos prazos.
          </p>
        </li>
        <li className="diferenciais__item diferenciais__item--foco">
          <h2 className="item__titulo">Foco</h2>
          <p className="item__texto">Focamos no empreendimento! Oferecemos serviços de qualidade com preços acessíveis.</p>
        </li>
        <li className="diferenciais__item diferenciais__item--especialistas">
          <h2 className="item__titulo">Especialistas</h2>
          <p className="item__texto">Equipe experiente e especializada! Testamos todos os produtos antes do lançamento.</p>
        </li>
      </ul>
    </section>
    <section className="sobre container">
      <div className="sobre__conteudo">
        <h2 className="sobre__titulo">Sobre</h2>
        <p className="sobre__texto">Criamos aplicações personalizadas para <strong className="sobre__texto--destaque">todas as
            pessoas</strong>!</p>
        <p className="sobre__texto">
          A manutenção de uma aplicação não pode ser um custo extra para o cliente, na Meu Site você assina nosso
          serviço e a manutenção já está inclusa. Assim, você não se preocupa com manutenção, é tudo por nossa conta.
        </p>
        <p className="sobre__texto sobre__texto--destaque sobre__texto--divisao">
          Conte com uma equipe especializada e exclusiva pra projetos incríveis em qualquer plataforma.
        </p>
        <ul className="sobre__plataformas">
          <li><img src="../static/img/android.png" alt="Ícone do Android" /></li>
          <li><img src="../static/img/blackberry.png" alt="Ícone da Blackberry" /></li>
          <li><img src="../static/img/apple.png" alt="Ícone da Apple" /></li>
          <li><img src="../static/img/windowsphone.png" alt="Ícone da Microsoft" /></li>
        </ul>
        <p className="sobre__texto">Desenvolvemos aplicações para todas as plataformas</p>
      </div>
      <img src="../static/img/sobre-apeperia.png" alt="Sobre a Apeperia" className="sobre__imagem" />
    </section>
    <section className="planos container">
      <h2 className="planos__titulo">Planos</h2>
      <ul className="planos__cartoes">
        <li className="cartao cartao--start">
          <h3 className="cartao__titulo">Start</h3>
          <article className="cartao__conteudo">
            <p className="cartao__preco"><em>R$ 500</em></p>
            <p className="cartao__texto">5 manutenções mensais</p>
            <p className="cartao__texto">App SEO</p>
            <p className="cartao__texto">1 sistema operacional</p>
            <a href="#" className="cartao__botao cartao__botao--start botao">Assinar plano</a>
          </article>
        </li>
        <li className="cartao cartao--ultra">
          <h3 className="cartao__titulo">Ultra</h3>
          <article className="cartao__conteudo">
            <p className="cartao__preco"><em>R$ 1500</em></p>
            <p className="cartao__texto">20 manutenções mensais</p>
            <p className="cartao__texto">App SEO</p>
            <p className="cartao__texto">4 sistemas operacionais</p>
            <p className="cartao__texto">24h de atendimento</p>
            <a href="" className="cartao__botao cartao__botao--ultra botao">Assinar plano</a>
          </article>
        </li>
        <li className="cartao cartao--mega">
          <h3 className="cartao__titulo">Mega</h3>
          <p className="cartao__preco"><em>R$ 1000</em></p>
          <article className="cartao__conteudo">
            <p className="cartao__texto">10 manutenções mensais</p>
            <p className="cartao__texto">App SEO</p>
            <p className="cartao__texto">2 sistemas operacionais</p>
            <a href="" className="cartao__botao cartao__botao--mega botao">Assinar plano</a>
          </article>
        </li>
      </ul>
    </section>
    <section className="contato container">
      <h2 className="contato__titulo">Contato</h2>
      <p>Entre em contato com a gente</p>
      <a href="contato.html" className="contato__botao botao">Entre em contato</a>
    </section>
    <section className="institucional container">
      <h2 className="institucional__titulo">Institucional</h2>
      <div className="institucional__conteudo">
        <div className="institucional__informacoes">
          <p className="institucional__descricao">Um pouco mais sobre a Meu Site</p>
          <address className="institucional__endereco">
            Rua Fulano de Tal, 777<br/>
            Vila do céu, São Paulo
            <article className="institucional__contato">
              <p><a href="tel:+551199999999" className="institucional__contato-telefone">(11) 9999-9999</a> ou <a
                  href="mailto:contato@meusite.com" className="institucional__contato-email">contato@meusite.com</a></p>
            </article>
          </address>
        </div>
        <video src="../static/img/O_que_faz_um_Desenvolvedor_Full_Stack_.mp4" className="institucional__video" controls></video>
      </div>
    </section>
  </main>
  <footer className="rodape container">
    <img src="../../static/img/logo.svg" alt="Logo da Apeperia" className="rodape__logo" />
    <ul className="rodape__social">
      <li><a href="#" className="rodape__midia"><img src="../static/img/facebook.png" alt="Ícone do Facebook" /></a></li>
      <li><a href="#" className="rodape__midia"><img src="../static/img/twitter.png" alt="Ícone do twitter" /></a></li>
      <li><a href="#" className="rodape__midia"><img src="../static/img/instagram.png" alt="Ícone do Instagram" /></a></li>
    </ul>
    <nav>
      <ul className="rodape__navegacao">
        <li className="rodape__link"><a href="#">Sobre</a></li>
        <li className="rodape__link"><a href="#">Planos</a></li>
        <li className="rodape__link"><a href="#">Blog</a></li>
        <li className="rodape__link"><a href="#">Destaques</a></li>
        <li className="rodape__link"><a href="#">Institucional</a></li>
        <li className="rodape__link"><a href="#">Contato</a></li>
      </ul>
    </nav>
    <button onClick={MelhorEnvio}>Gerar Token</button>
  </footer>
        </body>
    </>
  )
}

export default Home;