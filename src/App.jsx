import Menu from "./components/Menu"

function App() {
  
  const foods = [
    {
      id: 1,
      name: "Beef Teriaki Skewers",
      price: 15.99,
      available: true,
      onSale: false,
    },
    {
      id: 2,
      name: "Hot & Sour Soup",
      price: 7.99,
      available: true,
      onSale: true,
    },
    {
      id: 3,
      name: "Vegetable Lo Mein",
      price: 12.99,
      available: true,
      onSale: false,
    },
    {
      id: 4,
      name: "Chicken in Garlic Sauce",
      price: 17.99,
      available: false,
      onSale: false,
    },
    {
      id: 5,
      name: "Sichuan Cold Noodles",
      price: 8.99,
      available: false,
      onSale: true,
    }

  ]

  const handleAdd = (name) => {
    alert (
      `Added ${name} to order!`
    )
  }

  return (
    <>
      <h1>Menu</h1>
      <Menu foods={foods} handleAdd={handleAdd}/>
      
    </>
  )
}

export default App
