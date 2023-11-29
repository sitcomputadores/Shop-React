import Menu from "../segundoComponente/Menu"
import { Client } from "../octavoComponente/Client"
import { Footer } from "../sextoComponente/Footer"
import { Item } from "../quintoComponente/Item"
import { User } from "../septimoComponente/User"
import { Inventory } from "../tercerComponente/Inventory"
import { Cart } from "../cuartoComponente/Cart"
import { useFetch } from "../../hooks/useFetch"
import './Home.css'

export const Home = () => {
  const { data, isLoading, hasError } = useFetch('https://fakestoreapi.com/products?limit=6');
  console.log(data);
  return (
    <>
      <Menu />
      <hr />
      <div id="home">
        <h1>TIENDA DS2</h1>
      </div>
      <Cart />
      <hr />
      <Client />
      <Inventory />
      <section className="containerAside">
        <User />
        <div className="productsContainer">
          {
            data.map((dato) => (
              <Item url={dato.image} name={dato.title} price={dato.price} />
            ))
          }
        </div>
      </section>

      <Footer />
    </>
  )
}
