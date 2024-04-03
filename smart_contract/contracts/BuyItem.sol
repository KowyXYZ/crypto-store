// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract BuyItem {
    
    struct ProductStruct {
        string name;
        uint256 value;
    }

    ProductStruct[] public BoughtProducts;

    function addProduct(string memory _name, uint256 _value) public {
        BoughtProducts.push(ProductStruct(_name, _value));
    }


    function buyProduct(uint256 _productId) public payable returns( string memory ) {
        require(_productId > 0);
        ProductStruct storage product = BoughtProducts[_productId];
        require(msg.value >= product.value, "Insufficient funds");
        
        return 'Success';
    }

    function allProducts() public view returns(ProductStruct[] memory) {
        return BoughtProducts;
    }
}