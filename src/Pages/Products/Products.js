import React from 'react';
import useTools from '../../hooks/useTools';
import Product from './Product';

const Products = () => {
    const [tools, setTools] = useTools();
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Products</h2>
            <div className="grid grid-cols-3 gap-6 m-5">
                {
                    tools.map(tool => <Product
                        key={tool._id}
                        tool={tool}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;