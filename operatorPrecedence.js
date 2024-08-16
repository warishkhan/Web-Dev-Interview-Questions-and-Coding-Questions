/*

In JavaScript, operator precedence determines the order in which operators are evaluated in expressions.
Operators with higher precedence are evaluated before operators with lower precedence.
When operators have the same precedence, their associativity determines the order of evaluation.

Here's a summary of the operator precedence table for arithmetic operations and other related operators in JavaScript:

JavaScript Operator Precedence Table

Precedence	Operator Type	        Operator	                Associativity

1	        Grouping	            ()	                        n/a
2	        Member access	        .	                        Left-to-right
2	        Computed member access	[]	                        Left-to-right
2	        Function call	        ()	                        Left-to-right
2	        New with arguments	    new	                        n/a
3	        New without arguments	new	                        Right-to-left
4	        Postfix increment	    ++	                        n/a
4	        Postfix decrement	    --	                        n/a
5	        Logical NOT	            !	                        Right-to-left
5	        Bitwise NOT          	~	                        Right-to-left
5	        Unary plus	            +	                        Right-to-left
5	        Unary negation	        -	                        Right-to-left
5	        Prefix increment	    ++	                        Right-to-left
5	        Prefix decrement	    --	                        Right-to-left
5	        typeof	                typeof	                    Right-to-left
5	        void	                void	                    Right-to-left
5	        delete	                delete	                    Right-to-left
6	        Exponentiation	        **	                        Right-to-left
7	        Multiplication	        *	                        Left-to-right
7	        Division	            /	                        Left-to-right
7	        Remainder	            %	                        Left-to-right
8	        Addition	            +	                        Left-to-right
8	        Subtraction	            -	                        Left-to-right
9	        Bitwise shift	        <<, >>, >>>	                Left-to-right
10	        Relational	            <, <=, >, >=	            Left-to-right
10	        in	                    in	                        Left-to-right
10	        instanceof	            instanceof	                Left-to-right
11	        Equality	            ==, !=, ===, !==	        Left-to-right
12	        Bitwise AND              &	                        Left-to-right
13	        Bitwise XOR              ^	                        Left-to-right
14	        Bitwise OR               `	                        `
15	        Logical AND	             &&	                        Left-to-right
16	        Logical OR                 `	
17	        Nullish coalescing	     ??	                        Left-to-right
18	        Conditional (ternary)	 ?:	                        Right-to-left
19	        Assignment	             =, +=, -=, *=, /=, %=	    Right-to-left
19	        <<=, >>=, >>>=, &=, ^=,  =, **=`	
20	        Yield	                 yield	                    Right-to-left
20	        Yield with delegation	 yield*	                    Right-to-left
21	        Comma	                 ,	                        Left-to-right  



Key Points
Grouping (()) has the highest precedence and is used to override the default precedence order.
Unary operators (such as +, -, !, typeof, void, delete) have higher precedence than binary operators.
Exponentiation (**) is right-to-left associative, unlike most other binary operators.
Multiplication, division, and remainder have the same precedence and are evaluated before addition and subtraction.
Comparison operators (like <, >, <=, >=) are evaluated before equality operators (==, !=, ===, !==).
Logical operators have lower precedence than comparison operators, with AND (&&) evaluated before OR (||).
The conditional (ternary) operator (?:) is right-to-left associative and has lower precedence than logical operators.
Assignment operators have very low precedence, evaluated after most other operations.

Understanding operator precedence is crucial for writing clear and correct JavaScript code, especially in complex expressions.
Use parentheses to make the code more readable and to ensure the desired order of operations.


*/