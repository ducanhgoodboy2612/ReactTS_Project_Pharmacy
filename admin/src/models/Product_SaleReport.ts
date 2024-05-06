interface Product_SaleReport_Type {
    product_Id: number,
    Cate_Id: number,
    Product_Name: string,
    Unit: string,
    Unit_Price: number,
    Quantity_In_Stock: number,
    picture: string,
    Status: number,
    Description: string | null,
    CreatedDay: Date | null,
    TotalQuantitySold: number,
}

export default Product_SaleReport_Type;