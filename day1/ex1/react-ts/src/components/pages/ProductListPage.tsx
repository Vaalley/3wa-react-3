import { useCartStore } from '../../store/useCartStore'
import { CartButton } from '../atoms/CartButton/CartButton'

const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 },
  { id: 4, name: 'Product 4', price: 49.99 },
]

export const ProductListPage = () => {
  const { cartItems, addItem, removeItem, clearCart } = useCartStore()

  const isInCart = (id: number) => cartItems.some(item => item.id === id)

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Product List</h1>
        <div>
          <span style={{ marginRight: '10px' }}>Cart Items: {cartItems.length}</span>
          <CartButton onClick={clearCart} variant="danger">
            Clear Cart
          </CartButton>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <div 
            key={product.id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <CartButton
              onClick={() => isInCart(product.id) 
                ? removeItem(product.id)
                : addItem(product)
              }
              variant={isInCart(product.id) ? 'danger' : 'primary'}
            >
              {isInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}
            </CartButton>
          </div>
        ))}
      </div>
    </div>
  )
}
