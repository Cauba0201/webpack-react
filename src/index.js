import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom
import { useState } from 'react'

// Tạo component App
function App() {

    const gift = [
        'CPU i9',
        'RAM 32GB RGB',
        'RGB keyboard'
    ]
    
    const handleUpdate = () => {
        setInfor({
            ...infor,
            bio: 'thích màu hồng ghét sự giả dối'
        })
    }
    

    return (
        <div className='App' style={{padding: 50}}>
            <h1 >Chưa có phần thưởng</h1>
            
            <button onClick={handleUpdate}>Lấy thưởng</button>
            
        </div>
    )
}

// Render component App vào #root element
//ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>) 
export default App;
