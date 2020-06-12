import { Row } from "./structure/Row";
import "./tela/root.css";
import "./tela/styles.css";

export function App(props) {
  return (
    <>
      <div>Tela: Typography, elements, layout, accessibility</div>
      <article>
        <h2>Typography</h2>
        <div>
          <div>
            <div>none</div>
            <div font-size="+7">+7</div>
            <div font-size="+6">+6</div>
            <div font-size="+5">+5</div>
            <div font-size="+4">+4</div>
            <div font-size="+3">+3</div>
            <div font-size="+2">+2</div>
            <div font-size="+1">+1</div>
            <div font-size="0">0</div>
            <div font-size="-1">-1</div>
            <div font-size="-2">-2</div>
          </div>
          <pre>
            <code>
              {`
<div>none</div>
<div font-size="+7">+7</div>
<div font-size="+6">+6</div>
<div font-size="+5">+5</div>
<div font-size="+4">+4</div>
<div font-size="+3">+3</div>
<div font-size="+2">+2</div>
<div font-size="+1">+1</div>
<div font-size="0">0</div>
<div font-size="-1">-1</div>
<div font-size="-2">-2</div>
          `.trim()}
            </code>
          </pre>
        </div>
      </article>
      <article>
        <h2>Layout</h2>
        <div y-y>
          <h3>Max Width</h3>
          <div w-max="md">
            <p>
              Vite requires native ES module imports during development. The
              production build also relies on dynamic imports for code-splitting
              (which can be polyfilled).
            </p>

            <p>
              Vite assumes you are targeting modern browsers and therefore does
              not perform any compatibility-oriented code transforms by default.
              Technically, you can add autoprefixer yourself using a PostCSS
              config file, or add necessary polyfills and post-processing steps
              to make your code work in legacy browsers - however that is not
              Vite's concern by design.
            </p>
          </div>
        </div>
        <div>
          <h3>x-x</h3>
          <div x-x>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
          </div>
          <div x-x x-space="1/4">
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
          </div>
          <div x-x x-space="1/2">
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
          </div>
          <div x-x x-space>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
          </div>
          <div x-x x-space="between" p-l p-r>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
          </div>
          <div x-x x-space="auto" p-l p-r>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
          </div>
          <Row spaceX="4">
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
          </Row>
        </div>
        <div>
          <h3>y-y</h3>
          <div y-y>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
          </div>
          <div y-y y-space p-t p-b>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
          </div>
        </div>
      </article>
      <article>
        <h2>Forms</h2>
        <div>
          <h3>Textbox</h3>
          <label>
            Name
            <input type="text" value="Some input[type=text] w-full" w-full />
          </label>
          <label>
            Bio
            <textarea w-full>Some textarea w-full</textarea>
          </label>
          <label y-y y-stretch>
            Name
            <input type="text" value="Some input[type=text] y-stretch" />
          </label>
          <label y-y y-stretch>
            Bio
            <textarea>Some textarea y-stretch</textarea>
          </label>
        </div>
      </article>
      <p>
        <a href="https://github.com/vitejs/vite">Vite</a>
      </p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  );
}
