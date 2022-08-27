import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ModificarNoticia(){

    const { id } = useParams();
    const [noticia,setNoticia] = useState({titulo:"",subtitulo:"",cuerpo:"",img_id:""})
    const [uploading,setUploading] = useState(false);
    const [imageSelected,setImageSelected] = useState("");
    const [variante,setVariante] = useState("");
    const [texto,setTexto] = useState("");
    const {register,setValue,handleSubmit} = useForm();
    const [allowUpload, setAllowUpload] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const request = async() =>{
            let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/noticias/`+id)
            setNoticia(res.data)
            setValue("titulo", res.data.titulo);
            setValue("subtitulo", res.data.subtitulo);
            setValue("cuerpo", res.data.cuerpo);
            setValue("img_id", res.data.img_id);
        };
        request();
    },[id,setValue])

    const onSubmit = async(data) => {
        try {
          let res = await axios.post(`${process.env.REACT_APP_API_URL}/api/noticias/modificar/`+id,data)
          if(res.status===200){
            setVariante("success")
            setTexto("Noticia actualizada")
            setTimeout(()=>{
              navigate("/noticias")
          },1000)
          }
        } catch (error) {
          setVariante("danger")
          setTexto("Hubo un error")
          console.log(error);
        }
      };

      const handleImage = (event) => {
        setImageSelected(event.target.files[0]);
        if (event.target.files[0] !== undefined) {
          setAllowUpload(true);
        } else if (event.target.files[0] === undefined) {
          setAllowUpload(false);
        }
      }
      
      const uploadImage = async() => {
        setUploading(true)
        try{
        if(noticia.img_id){
            await axios.get(`${process.env.REACT_APP_API_URL}/api/noticias/eliminarimagen/`+noticia.img_id);
        }
        const data = new FormData();
        data.append("file",imageSelected)
        data.append("upload_preset","pw3d4dbo")
        await axios.post(`${process.env.CLOUDINARY_URL}/image/upload`,data).then((response)=>{setValue("img_id", response.data.public_id)})
      }catch(error){
        console.log(error)
      }
        setUploading(false)
      }

    return(
        <div className="contenedor">
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" style={{border:"black 1px solid",padding:"1rem",borderRadius:"10px"}}>
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" placeholder="Enter title" name="titulo" {...register("titulo")}/>
        </Form.Group>
  
        <Form.Group className="mb-3" style={{border:"black 1px solid",padding:"1rem",borderRadius:"10px"}}>
          <Form.Label>Subtitulo</Form.Label>
          <Form.Control type="text" placeholder="Enter subtitle" name="subtitulo" {...register("subtitulo")}/>
        </Form.Group>

        <Form.Group className="mb-3" style={{border:"black 1px solid",padding:"1rem",borderRadius:"10px"}}>
          <Form.Label>Cuerpo</Form.Label>
          <Form.Control as="textarea" placeholder="Enter body" name="cuerpo" {...register("cuerpo")}/>
        </Form.Group>

        <Form.Group className="mb-3" style={{border:"black 1px solid",padding:"1rem",borderRadius:"10px"}}>
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" placeholder="Enter body" onChange={handleImage} />
          {
            allowUpload &&
            <Button variant="primary" onClick={uploadImage} style={{marginTop:"1rem"}}>Subir imagen</Button>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Eliminar imagen actual" name="img_delete" {...register("img_delete")}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="hidden" name="img_id" {...register("img_id")}/>
        </Form.Group>

        {
          uploading &&
          <Alert key="primary" variant="primary">
          Subiendo imagen...
        </Alert>
        }

        <Button variant="primary" type="submit">
          Guardar
        </Button>

        <Alert key={variante} variant={variante}>
          {texto}
        </Alert>
      </Form>
      </div>
    )

}