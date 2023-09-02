int fahrenheit = 94;

decimal celsius = (fahrenheit - 32m) * (5m / 9m);

Console.WriteLine($"The temperature is {celsius} Celsius.");

int value = 1;
value++;
Console.WriteLine("First: " + value);           // 2
Console.WriteLine("Second: " + value++);        // 2
Console.WriteLine("Third: " + value);           // 3
Console.WriteLine("Fourth: " + (++value));      // 4
