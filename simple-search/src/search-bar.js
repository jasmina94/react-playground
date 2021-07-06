import React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchTerm = this.handleSearchTerm.bind(this);
        this.handleInStockOnly = this.handleInStockOnly.bind(this);
    }

    handleSearchTerm(e)  {
        this.props.onSearchTermChange(e.target.value);
    }

    handleInStockOnly(e) {
        this.props.onStockOnlyChange(e.target.checked);
    }

    render() {
        const searchTerm = this.props.filterText;
        const inStockFlag = this.props.inStockOnly;

        return (
            <div>
                <div>
                    <input type="text" value={searchTerm} placeholder="Search..." onChange={this.handleSearchTerm}/>
                </div>
                <p>
                    <input type="checkbox" checked={inStockFlag} onChange={this.handleInStockOnly}/>
                    <label>Only show products in stock</label>
                </p>
            </div>
        );
    }
};