import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Link from 'next/link';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 240,
    },
});


function Product({ product }) {
    console.log("single prod", product)
    const classes = useStyles();

    return (
        <Link as={`/product/${product.slug}`} href="/[product]/[single-product]">
            <Card className={classes.root}>
                <CardActionArea>
                    <img
                        height="300px"
                        src={product.images[0].src}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                            {product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Add to cart
                </Button>

                </CardActions>
            </Card>
        </Link>
    );
}

export default Product;