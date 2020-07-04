# JavaScript Reqular Expression

Regular Expression are used to perform pattern matching and search-and-replace functions on text

## Syntax

- `/pattern/modifers;`

- Exmpale:

```js
let a = /abc/i;
```

here,

|        |     |                          |
| ------ | :-: | ------------------------ |
| /abc/i |  :  | is the reguar expression |
| abc    |  :  | is the pattern           |
| i      |  :  | is the modifer           |

## Regex Methods

- exec()
- test()
- toString()

## String Methods

- match()
- search()
- matchAll()

## **Modifers**

are used to perform the case insentive and global match

|     |     |                                  |
| --- | :-: | -------------------------------- |
| g   |  :  | perform the global match         |
| i   |  :  | perform the case-insentive match |
| m   |  :  | perform the multiline match      |

## **Brackets**

are used to find a range of the character

|          |     |                                               |
| -------- | :-: | --------------------------------------------- |
| `[abc]`  |  :  | find any character in the bracket             |
| `[^abc]` |  :  | find any character not in the bracket         |
| `[0-9]`  |  :  | find any digit here, any digit between 0 to 9 |
| `(x|y)`  |  :  | find any one of the specified                 |
|          |     |                                               |

## **Metacharacters**

- these are the characters with a special meaning

|      |     |                                                           |
| ---- | :-: | --------------------------------------------------------- |
| `.`  |  :  | matches any single character except the newline character |
| `\w` |  :  | find a word character                                     |
| `\W` |  :  | find a non-word character                                 |
| `\d` |  :  | find a digit                                              |
| `\D` |  :  | find a non digit                                          |
| `\s` |  :  | find a White space Characrer                              |
| `\S` |  :  | find a White non-space Characrer                          |
| `\b` |  :  | find a match at the beginning/end                         |
| `\B` |  :  | find the match but should not at the start or end         |

## **Quantifers**

|      |     |                                                    |
| ---- | :-: | -------------------------------------------------- |
| `a+` |  :  | matches string having at least one occurence of a  |
| `a*` |  :  | matches string having zero or more occurence of ad |
| `a?` |  :  |                                                    |

## Example

```js
// Email verification
let rex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
```
