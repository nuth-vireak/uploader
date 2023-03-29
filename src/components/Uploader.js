
import {useState} from 'react' 
import './uploader.css'
import {MdUpload, MdDelete} from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

function Uploader() {

  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("No selected file")
  return (
    <main>
        <form action="" onClick={() => document.querySelector(".input-field").click()}>
            <input type="file" accept='image/*' className='input-field' hidden 
              onChange={({target: {files}}) =>{
                files[0] && setFileName(files[0].name)
                  if(files){
                setImage(URL.createObjectURL(files[0]))
              }
            }}/>
            {image ?
            <img src={image} width={150} height={150} alt={fileName}/> 
          :
        <>
          <MdUpload color='#1475cf' size={60}/>
          <p>Browse File to upload</p>
          </>

        }
      </form>

      <section className='uploaded-row'>
        <AiFillFileImage color='#1475cf'/>
        <span className='upload-content'>
          {fileName} s-
          <MdDelete
          onClick={() => {
            setFileName("No selected File")
            setImage(null)
          }}/>
        </span>
      </section>
    </main>
  )
}

export default Uploader