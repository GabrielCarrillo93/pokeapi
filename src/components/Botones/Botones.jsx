
const Botones = ({texto, id}) => {
  return (
    <button id={id ? id : ""} className="btn-comp">
        {texto}
    </button>
  )
}

export default Botones