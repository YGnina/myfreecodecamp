int saleAmount = 1001;
int discount = saleAmount > 1000 ? 100 : 50;
Console.WriteLine($"Discount: {discount}");

// -> Discount: 100

// basic form:
// <evaluate this condition> ? <if condition is true, return this value> : <if condition is false, return this value>
