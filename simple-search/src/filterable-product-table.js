import { SearchBar } from "./search-bar";
import { ProductTable } from "./product-table";
import React from "react";

export class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterText: '', inStockOnly: false }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleStockOnlyChange = this.handleStockOnlyChange.bind(this);
    }

    handleTermChange(filterText) {
        this.setState({ filterText: filterText });
    }

    handleStockOnlyChange(inStockOnly) {
        this.setState({ inStockOnly: inStockOnly });
    }

    render() {
        return (
            <div>
                <h3>Simple search program</h3>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onSearchTermChange={this.handleTermChange}
                    onStockOnlyChange={this.handleStockOnlyChange}/>
                <ProductTable
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    products={this.props.products}/>
            </div>
        );
    }
};