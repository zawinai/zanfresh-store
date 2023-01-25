import React from 'react'

const Loading = () => {
  return (
    <div>
        {
        [...Array(20).keys()].map((i) => (
            <li key={i}>loading..</li>
        ))
        }
    </div>
  )
}

export default Loading