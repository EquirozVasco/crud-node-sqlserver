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


};
