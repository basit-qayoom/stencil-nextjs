export default function Home() {
  return (
    <>
      <h1>Next App</h1>
      <h1>SHADOW DOM ENABLED</h1>
      <pw-card
        card-title="I am card title stencil"
        link="https://www.linkedin.com"
      >
        <a href="https://www.google.com">Slot Link: https://www.google.com</a>
      </pw-card>
      <hr />
      <h1>SHADOW DOM DISABLED</h1>
      <my-app></my-app>
      <h1>---CALLING COMPONENTS ONE BY ONE---</h1>
      <hr />
      <my-timer></my-timer>
      <hr />
      <my-button></my-button>
      <hr />
      <my-form></my-form>
      <hr />
      <my-input></my-input>
      <hr />
      <text-field text="Hello from text stencil component--- hey basit"></text-field>
      <hr />
      <hr />
      <hr />
    </>
  );
}
