import { SearchBar } from "./search-bar";
import { ProductTable } from "./product-table";
import React from "react";

const allProducts = [
    {
        "category": "Sporting Goods",
        "price": "$49.99",
        "stocked": true,
        "name": "Football"
    },
    {
        "category": "Sporting Goods",
        "price": "$9.99",
        "stocked": true,
        "name": "Baseball"
    },
    {
        "category": "Sporting Goods",
        "price": "$29.99",
        "stocked": false,
        "name": "Basketball"
    },
    {
        "category": "Electronics",
        "price": "$99.99",
        "stocked": true,
        "name": "iPod Touch"
    },
    {
        "category": "Electronics",
        "price": "$399.99",
        "stocked": false,
        "name": "iPhone 5"
    },
    {
        "category": "Electronics",
        "price": "$199.99",
        "stocked": true,
        "name": "Nexus 7"
    }
];

export class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterText: '', inStockOnly: false, products: allProducts }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleStockOnlyChange = this.handleStockOnlyChange.bind(this);
    }

    handleTermChange(value) {
        this.setState({ filterText: value });
        this.filterProducts(value, this.state.inStockOnly);
        console.log(this.state);

    }

    handleStockOnlyChange(value) {
        this.setState({ inStockOnly: value });
        this.filterProducts(this.state.searchTerm, value);
        console.log(this.state);
    }

    filterProducts(searchTerm, inStockOnly) {
        let result = this.state.products;
        if (searchTerm !== '') {
            result = this.state.products.filter(x => x.category.indexOf(searchTerm) !== -1 || x.name.indexOf(searchTerm) !== -1);
        }

        if (inStockOnly) {
            result = this.state.products.filter(x => x.stocked);
        }

        console.log(result);
        
        this.setState({ products: result });
    }

    render() {
        return (
            <div>
                <h3>Simple search program</h3>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onSearchTermChange={this.handleTermChange}
                    onStockOnlyChange={this.handleStockOnlyChange} />
                <ProductTable
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    products={this.state.products} />
            </div>
        );
    }
};