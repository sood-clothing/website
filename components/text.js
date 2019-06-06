export default ({ children, ...style }) => (
  <span style={{color: 'whitesmoke', fontSize: "1rem", textTransform: 'uppercase', ...style}}>
    {children}
  </span>
)