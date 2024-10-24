import { CategoryType } from "../lib/types"

interface CategoryArg {
  details: CategoryType,
}

function Category({details}: CategoryArg) {
  return (
    <div>
      <img src={details.image} alt="" />
      <h4>{details.name}</h4>
    </div>
  )
}

export default Category
