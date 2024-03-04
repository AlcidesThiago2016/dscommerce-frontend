import './styles.css';
import computerImg from '../../../assets/Computer.png';

export default function Cart(){

    return (
        <main>
        <section id="cart-container-section" className="dsc-container">
            <div className="dsc-card">
                <div className="dsc-cart-item-container dsc-line-bottom">
                   <div className="dsc-cart-item-left">
                        <img src={computerImg} alt="Computer"/>
                        <div className="dsc-cart-item-description">
                            <h3>Computador Gamer XT</h3>
                            <div className="dsc-cart-item-quantity-container">
                                <div className="dsc-cart-item-quantity-btn">-</div>
                                <p>1</p>
                                <div className="dsc-cart-item-quantity-btn">+</div>
                            </div>
                        </div>
                   </div>
                   <div className="dsc-cart-item-right">
                        R$ 5000,00
                   </div>
                </div>
                <div className="dsc-cart-item-container dsc-line-bottom">
                    <div className="dsc-cart-item-left">
                         <img src={computerImg} alt="Computer"/>    
                         <div className="dsc-cart-item-description">
                             <h3>Computador Gamer XT</h3>
                             <div className="dsc-cart-item-quantity-container">
                                 <div className="dsc-cart-item-quantity-btn">-</div>
                                 <p>1</p>
                                 <div className="dsc-cart-item-quantity-btn">+</div>
                             </div>
                         </div>
                    </div>
                    <div className="dsc-cart-item-right">
                         R$ 5000,00
                    </div>
                 </div>
                <div className="dsc-cart-total-container">
                   <h3>R$ 15000,00</h3>
                </div>
            </div>
            <div className="dsc-btn-page-container">
                <div className="dsc-btn dsc-btn-blue">
                    Finalizar Pedido
                </div>
                <div className="dsc-btn dsc-btn-white">
                    Continuar Comprando
                </div>
            </div>
        </section>
    </main>

    );

}