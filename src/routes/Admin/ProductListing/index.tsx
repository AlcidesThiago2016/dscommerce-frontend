import './styles.css';
import * as productService from '../../../services/product-service';
import editIcon from '../../../assets/edit.svg';
import deleteIcon from '../../../assets/delete.svg';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import SearchBar from '../../../components/SearchBar';

type QueryParams = {
    page: number;
    name: string;
}

export default function ProductListing(){

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLastPage, setIsLastPage] = useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);


    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: ""
    });

    useEffect(() => {
        productService.findPageRequest(queryParams.page, queryParams.name)
        .then(response => {
            const nextPage = response.data.content;
            setProducts(products.concat(nextPage));
            setIsLastPage(response.data.last);
        })
    }, [queryParams]);

    function handleSearch(searchText : string){
        setProducts([]);
        setQueryParams({ ...queryParams ,page: 0 ,name: searchText });
    }

    function handleNextPageClick(){
        setQueryParams({ ...queryParams, page : queryParams.page + 1});
    }

    return (
        <main>
        <section id="product-listing-section" className="dsc-container">

            <h2 className="dsc-section-title dsc-mb20">Cadastro de Produtos</h2>

            <div className="dsc-btn-page-container dsc-mb20">
                <div className="dsc-btn dsc-btn-white">Novo</div>
            </div>

            <SearchBar onSearch={handleSearch}/>

            <table className="dsc-table dsc-mb20 dsc-mt20">
                <thead>
                    <th className="dsc-tb576">ID</th>
                    <th></th>
                    <th className="dsc-tb768">Preço</th>
                    <th className="dsc-txt-left">Nome</th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>

                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td className="dsc-tb576">{product.id}</td>
                                <td><img className="dsc-product-listing-image" src={product.imgUrl} alt={product.name}/></td>
                                <td className="dsc-tb768">{product.price.toFixed(2)}</td>
                                <td className="dsc-txt-left"> {product.name} </td>
                                <td><img className="dsc-product-listing-btn" src={editIcon} alt="Editar"/></td>
                                <td><img className="dsc-product-listing-btn" src={deleteIcon} alt="Deletar"/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                 !isLastPage &&
                 <div onClick={handleNextPageClick} className="dsc-btn-next-page">Carregar Mais...</div>
            }
           
        </section>
    </main>
    )
}