function GerarLista() {
  const lista = []
  for (let i = 1; i <= 10; i++) {
    lista.push(<span>{i}<br /></span>)
  }
  return lista
}
export default function lista1() {

  return (
    <div>
      {GerarLista()}
    </div>

  )
}
