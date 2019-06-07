export default ({ children }) => (
  <div>
      {children}
    <style jsx>{`
        div {
          border-style: solid;
          border-width: 2px;
          padding: 8px;
          border-color: white;
        }
    `}
    </style>
  </div>

)