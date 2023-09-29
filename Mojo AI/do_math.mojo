# declare variables with var to create a mutable value, 
# or with let to create an immutable value.

fn do_math():
    let x: Int = 1
    let y = 2
    print(x + y)

do_math()

# this add() would be the same as do_math()
# Function arguments and returns in mojo

fn add(x: Int, y: Int) -> Int:
    return x + y

z = add(1, 2)
print(z)
