export const querys = {

  // querys Products
  getAllProducts: "SELECT * FROM [little-store].[dbo].Products;",
  getProducById: "SELECT * FROM [Products] Where productId = @productId",
  addNewProduct:
    "INSERT INTO [little-store].[dbo].[Products] (name, description, price) VALUES (@name,@description,@price);",
  deleteProduct: "DELETE FROM [little-store].[dbo].[Products] WHERE productId = @productId",
  updateProductById:
    "UPDATE [little-store].[dbo].[Products] SET Name = @name, Description = @description, price = @price WHERE productId = @productId",

  // querys Customers
  getAllCustomers: "SELECT * FROM [little-store].[dbo].Customers;",
  getCustomerById: "SELECT * FROM [Customers] Where customerId = @customerId",
  addNewCustomer:
    "INSERT INTO [little-store].[dbo].[Customers] (name, adress) VALUES (@name,@adress);",
  deleteCustomer: "DELETE FROM [little-store].[dbo].[Customers] WHERE customerId = @customerId",
  updateCustomerById:
    "UPDATE [little-store].[dbo].[Customers] SET Name = @name, adress = @adress WHERE customerId = @customerId",

  // querys Sellers
  getAllSellers: "SELECT * FROM [little-store].[dbo].Sellers;",
  getSellerById: "SELECT * FROM [Sellers] Where sellerId = @sellerId",
  addNewSeller:
    "INSERT INTO [little-store].[dbo].[Sellers] (name, adress) VALUES (@name,@adress);",
  deleteSeller: "DELETE FROM [little-store].[dbo].[Sellers] WHERE sellerId = @sellerId",
  updateSellerById:
    "UPDATE [little-store].[dbo].[Sellers] SET Name = @name, adress = @adress WHERE sellerId = @sellerId",

  // querys Sales
  getAllSales: "SELECT Products.name as Product_name, Customers.name as Customer_name, Sellers.name as Seller_name FROM Sales inner join Products on Sales.saleId = Products.productId inner join Customers on Sales.customerId = Customers.customerId inner join Sellers on Sellers.sellerId = Sales.sellerId;",

  getSaleById: "SELECT Products.name as Product_name, Customers.name as Customer_name, Sellers.name as Seller_name FROM Sales inner join Products on Sales.saleId = Products.productId inner join Customers on Sales.customerId = Customers.customerId inner join Sellers on Sellers.sellerId = Sales.sellerId Where saleId = @saleId",
  
  addNewSale:
    "INSERT INTO [little-store].[dbo].[Sales] (productId, customerId, sellerId) VALUES (@productId,@customerId,@sellerId);",

  deleteSale: "DELETE FROM [little-store].[dbo].[Sales] WHERE saleId = @saleId",
  updateSaleById:
    "UPDATE [little-store].[dbo].[Sales] SET productId = @productId, customerId = @customerId, sellerId = @sellerId WHERE saleId = @saleId",


};
