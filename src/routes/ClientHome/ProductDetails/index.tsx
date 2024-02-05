import './styles.css'
import BottonInverse from "../../../components/BottonInverse";
import BottonPrimary from "../../../components/BottonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../services/product-service';
import { useParams } from 'react-router-dom';

export default function ProductDetails(){

    const params = useParams();

    const product = productService.findById(Number(params.productId));

    return(
        <main>
            <section id="product-details-section" className="dsc-container">
                {
                    product &&
                     <ProductDetailsCard product= {product} />
                }
                <div className="dsc-btn-page-container">
                    <BottonPrimary text="Comprar"/>
                    <BottonInverse text="Inicio"/>
                </div>
            </section>
        </main>
    );
}