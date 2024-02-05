import './styles.css'
import BottonInverse from "../../../components/BottonInverse";
import BottonPrimary from "../../../components/BottonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from '../../../models/product';

const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "Esta TV e muito bonita",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
    price: 2500.99,
    categories: [
        {
            id: 2,
            name : "Eletrônicos"
        },
        {
            id: 3,
            name : "Computadores"
        },
        {
            id: 4,
            name: "Importados"
        }
    ]

}

export default function ProductDetails(){
    return(
        <main>
            <section id="product-details-section" className="dsc-container">
                <ProductDetailsCard product= {product} />
                <div className="dsc-btn-page-container">
                    <BottonPrimary text="Comprar"/>
                    <BottonInverse text="Inicio"/>
                </div>
            </section>
        </main>
    );
}