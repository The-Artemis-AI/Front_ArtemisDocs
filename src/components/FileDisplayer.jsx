import {useState} from 'react'


function FileDisplayer() {
    const [containerWidth, setContainerWidth] = useState(300);
    const handleResize = (e) => {
        setContainerWidth(e.target.clientWidth);
      };

  return (
    <div
      className="resize-container"
      style={{ width: containerWidth + 'px' }}
      onDrag={handleResize}
    >
      Resizable Container
    </div>
  )
}

export default FileDisplayer