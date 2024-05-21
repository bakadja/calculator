import React from 'react'
export default function Card({children}) {
    const styles = {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
      };
  return (
    <div style={styles}>
        {children}
    </div>
  )
}
