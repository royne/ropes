
import { RowList, Ico, BoxCard } from '../ui/home/contact'
const CardContact = ({data}) => {
  return (
    <BoxCard>
      <h3>{data.name}</h3>
      <div>
        {data.list.map(elm => (
          <RowList key={elm.value}>
            <Ico><img src={elm.ico} /></Ico>
            <span>{elm.value}</span>
          </RowList>
        ))}
      </div>
    </BoxCard>
  )
}

export default CardContact