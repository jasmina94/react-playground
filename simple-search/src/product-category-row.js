import React from "react";

export class ProductCategoryRow extends React.Component {
    constructor(props) {
        super(props);
        this.categoryName = props.categoryName;
        this.products = props.products;
    }

    render() {
        return (
            <tbody>
                <tr>
                    <th>{this.categoryName}</th>
                </tr>
                {[...this.products].map((product) =>
                    <tr key={product.name}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                )}
            </tbody>
        );
    }
}