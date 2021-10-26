import { Included } from "../types"

export const filterIncluded = (included: Included[], type: string) => {
  return included.filter((item: Included) => {
    // console.log(item.id)
    return item.type === type})}
