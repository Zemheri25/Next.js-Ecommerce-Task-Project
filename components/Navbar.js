import Link from "next/link"

const Navbar = () => {
  return (
    <div className = "navbar">
        <Link href = "/">
            <h3 className = "Link">Products</h3>
        </Link>

        <Link href = "/Basket" className = "Link">
            <h3 className = "Link">Basket</h3>
        </Link>
    </div>
  )
}

export default Navbar