#READ ME

## Program Info
This program is called BEEP BOOP.
It accepts user input and either writes out the number or writes out BEEP if there is the digit 1 in the number, BOOP if there is the digit 2 in the number, or "Sorry Dave, I can't do that" if there is the digit 3 in the number.

##Credits
written by Nuala Gray using both a PC and a Mac
Thanks to mentoring help from Lena and Ben
Thanks for troubleshooting help from Raven Gray.

##History
January 2019
Version 1

### SETUP Instructions
This is a browser program using html, css, and javascript. bootstrap and jquery-3.3.1 are included as add-ins. This should run on most browsers. It was tested on Chrome and Internet Explorer.

### SPECS

| Spec | Input | Output |
| ------ | ------ | ------ |
| Returns 0 when entered | 0 | 0 |
| Returns range of numbers | 9 | 0,1,2,3,4,5,6,7,8,9 |
| Single digit number entered, 3 in series replaced with Dave| 9 | 0,1,2,Dave..,4,5,6,7,8,9|
| Above and 2 in series replaced with Boop| 9 | 0,1,Boop,Dave..,4,5,6,7,8,9|
| Above and 1 in series replaced with Beep| 9 | 0,Beep,Boop,Dave..,4,5,6,7,8,9|
| Double digit number entered,3 in series replaced with Dave  | 13 | 0,1,2,Dave..,4,5,6,7,8,9, 10, 11, 12, Dave.. |
| Above and any 2 in series replaced with Boop  | 13 | 0,1,2,Dave..,4,5,6,7,8,9, 10, 11, Boop, Dave.. |
| Above and any 1 in series replaced with Boop  | 13 | 0,1,2,Dave..,4,5,6,7,8,9, 10, Beep, Boop, Dave.. |
|  |  |  |
|  |  |  |
|  |  |  |

### Creation Info
This is project number three and Epicodus Coding School

### Copyright and License Info
The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
