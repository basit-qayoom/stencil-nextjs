export default function Home() {
  return (
    <>
    <h1>Next App</h1>
      <my-app></my-app>
      <hr />
      <h1>------TESTING OTHER COMPONENTS::::::</h1>
      <hr />
      <hr />
      <hr />
      <pw-card link='https://www.linkedin.com' card-title='Title from Next'>
        <a href='https://www.google.com'>Slot Link: https://www.google.com</a>
      </pw-card>
      <hr />
      <my-timer></my-timer>
      <hr />
      <my-button></my-button>
      <hr />
      <my-form></my-form>
      <hr />
      <my-input></my-input>
      <hr />
      <text-field text='Hello from text stencil component--- hey basit'></text-field>
      <hr />
      <hr />
      <hr />
    </>
  );
}

