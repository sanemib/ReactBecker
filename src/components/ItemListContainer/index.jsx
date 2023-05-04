import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './itemlistcontainer.module.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../db/firebase-config';
import AddCart from '../AddCart';
import { CircularProgress } from '@mui/material';
import { AddDotContext } from '../../contexts/AddDotContext';
import "animate.css"


function ItemListContainer() {

    const { categories } = useParams()

    const {addDot} = useContext(AddDotContext)

    const [loading, setLoading] = useState(true)

    const [products, setProducts] = useState([])
    const productsRef = collection(db, "products")
  
    const getProducts = async () => {
        const productsCollection = await getDocs(productsRef)       // productsCollection is a QuerySnapshot
        const productos = productsCollection.docs.map(doc => ({...doc.data(), id: doc.id}))
        setProducts(productos.filter(element=> element.categoria.toLowerCase() ===categories))
        categories ? null : setProducts(productos)
        console.log(productos)
        setLoading(false)
    }
  
    useEffect(() => {
      getProducts()
    }, [categories])

    if(loading){
      return <div className={styles.loading}>
        <CircularProgress />
      </div>
    }


    return (
        <div className={styles.index}>
            <div className={styles.container}>
            {products.map((producto)=> (
            <Card key={producto.id} sx={{minWidth: 345, maxWidth: 345, borderRadius: 4, p: 2, display: "flex", flexDirection: "column", justifyContent: 'center'}} className={`${styles.cardS} animate__fadeInUp`}>
                <CardMedia
                sx={{ height: 150}}
                image={producto.imagen}
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{height: 96}}>
                    {producto.nombre+" "+producto.marca}
                </Typography>
                <Typography variant="h4" color="text.secondary" align="right">
                    {"$"+addDot(producto.precio)}
                </Typography>
                </CardContent>
                <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                <Link to={`${producto.id}`}>
                    <Button variant='outlined' size="small">Descripción</Button>
                </Link>
                <AddCart producto={producto}/>
                </CardActions>
            </Card>
            ))}
        </div>
      </div>
  )
}

export default ItemListContainer