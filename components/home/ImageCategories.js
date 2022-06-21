
const ImageCategories = ({text}) => {
  const reatas = ["reatas", "cintas", "velcros", "reflectivos", "herrajes", "pegantes", "espumas", "colchonetas", "almohadas", "reatas-en-poliester", "reatas-tipo-seguridad", "reatas-acanaladas", "otras-reatas", "espumas-troqueladas", ]
  const other = ["cremalleras", "slyder"]

  const CompenentImage = () => {
    if(!text) return
    if (other.includes(text)){
      return('')
    }else if(reatas.includes(text)){
      return (<img src="/statics/img/categories/reatas.jpg" />)
    }else{
      return (<img src="/statics/img/categories/lonas.jpg" />)
    }
  }
  return (
    <CompenentImage />
  )
}

export default ImageCategories