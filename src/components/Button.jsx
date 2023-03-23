export default function Button({ children }) {
  return (
    <>
      <h1>Hola Rob =)</h1>
      <button onClick={() => alert("Me la comes 1-0")}>
        {children}
      </button>
    </>
  )
}