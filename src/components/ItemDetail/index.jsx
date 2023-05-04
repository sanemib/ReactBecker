import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from './itemdetail.module.scss'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../db/firebase-config';
import { useContext } from 'react';
import { AddDotContext } from '../../contexts/AddDotContext';
import CircularProgress from '@mui/material/CircularProgress';
import AddCart from '../AddCart';

function ItemDetail() {

    const {i} = useParams();
    const {addDot} = useContext(AddDotContext)

    const [loading, setLoading] = useState(true)

    const [producto, setProducto] = useState([])
    const productsRef = collection(db, "products")
  
    const getProducto = async () => {
        const productsCollection = await getDocs(productsRef)       // productsCollection is a QuerySnapshot
        const productos = productsCollection.docs.map(doc => ({...doc.data(), id: doc.id}))
        setProducto(productos.find(({id})=> id == i))
        console.log(producto)
        setLoading(false)
    }
  
    useEffect(() => {
      getProducto()
    }, [i])

    if(loading){
      return <div className={styles.loading}>
        <CircularProgress />
      </div>
    }
    
  return (
    <div className={styles.container}>
        <Link to={".." } relative="path">
            <Button size="large" variant="contained" sx={{position:"absolute", m:4,ml:15}} endIcon={<ArrowBackIosIcon />}></Button>
        </Link>
        <div className={styles.cardC}>
            <Card key={producto.id} sx={{maxWidth: 800, borderRadius: 4, p: 2, display: "flex", flexDirection: "column", justifyContent: 'center'}} className={styles.card}>
                <CardMedia sx={{ height: 440 }} image={producto.imagen} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {producto.nombre+" "+producto.marca}
                    </Typography>
                    <Typography variant="h4" color="text.secondary" align="right">
                        {"$"+addDot(producto.precio)}
                    </Typography>
                    <Typography variant="" color="text.secondary">
                        {producto.descripcion}
                    </Typography>
                </CardContent>
                <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                    <AddCart producto={producto}/>
                </CardActions>
            </Card>
        </div>
    </div>
  )
}

export default ItemDetail