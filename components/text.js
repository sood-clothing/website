export default ({ children, ...style }) => (
  <span style={{color: 'whitesmoke', fontSize: "1rem", ...style}}>
    {children}
  </span>
)