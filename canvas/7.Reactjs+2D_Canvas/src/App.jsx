import ArrowImg from "./assets/arrow.svg";
import Nudake from "./containers/Nudake";

function App() {
  return (
    <>
      <div className="app">
        <section className="section-1">
          <header>
            <h1>Portfolio</h1>
            <ul>
              <li>instagram</li>
              <li>twitter</li>
              <li>codepen</li>
            </ul>
          </header>
          <main>
            <div>
              <Nudake />
            </div>
          </main>
        </section>
        <section className="section-2">What is Lorem Ipsum?</section>
        <section className="section-3">
          <aside>
            <div className="top">1914 translation by H. Rackham</div>
            <div className="bottom">
              <img src={ArrowImg} alt="" />
              <img src={ArrowImg} alt="" />
            </div>
          </aside>
          <article>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
            was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </article>
        </section>
        <section className="section-4">
          <canvas></canvas>
          <aside>
            <h1>Javascript</h1>
            <h2>⭐⭐⭐⭐⭐</h2>
            <h2></h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </aside>
        </section>
      </div>
      <footer>
        <div className="email">archihw94@gmail.com</div>
      </footer>
    </>
  );
}

export default App;
