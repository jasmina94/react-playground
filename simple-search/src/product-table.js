import React from "react";
import { ProductCategoryRow } from "./product-category-row";

export class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.searchTerm = props.filterText;
        this.showInStockOnly = props.inStockOnly;

        console.log('Product table: ' + props.products.length);

        this.data = this.makeMap(props.products);
    }

    makeMap(products) {
        let map = new Map();
        for (const item of products) {
            let values = [];
            let newProduct = {
                'price': item.price,
                'stocked': item.stocked,
                'name': item.name
            }
            if (map.has(item.category)) {
                values = map.get(item.category);
            }
            values.push(newProduct);

            map.set(item.category, values);
        }
        return map;
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {
                    [...this.data.keys()].map(key =>
                        <ProductCategoryRow key={key} categoryName={key} products={this.data.get(key)} />
                    )
                }
            </table>
        )
    }
}