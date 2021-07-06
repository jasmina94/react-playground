import React from "react";

export class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr colspan="2">
                <th>{category}</th>
            </tr>
        );
    }
}