import MenuItem from "./MenuItem"

const Menu = ({foods, handleAdd}) => {
  return (
    <>
        {foods.map((food) => (
            <MenuItem key={food.id} food={food} handleAdd={() => handleAdd(food.name)}/>
        ))}
    </>
  )
}

export default Menu