interface CartButtonProps {
  onClick: () => void
  children: React.ReactNode
  variant?: 'primary' | 'danger'
}

export const CartButton = ({ onClick, children, variant = 'primary' }: CartButtonProps) => {
  const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: variant === 'primary' ? '#4CAF50' : '#f44336',
    color: 'white',
    margin: '4px'
  }

  return (
    <button onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  )
}
