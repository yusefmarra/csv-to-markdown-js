# CSV to Markdown Table

Write code that:

* Reads text in a simplified CSV format
* Prints out a table suitable for Markdown

## Examples

Given the following CSV text:

```
First,Last,Address
Annamarie,Romaguera,9446 Schroeder Squares
Sebastian,Hessel,114 Frederic Centers
Marlon,Hahn,307 Bradtke Grove
Duane,Schowalter,10771 Keaton Knoll
Laurence,Schuster,610 Odell Point
```

Your code should produce a table that looks like:

```
First     | Last       | Address
--------- | ---------- | ----------------------
Annamarie | Romaguera  | 9446 Schroeder Squares
Sebastian | Hessel     | 114 Frederic Centers  
Marlon    | Hahn       | 307 Bradtke Grove
Duane     | Schowalter | 10771 Keaton Knoll
Laurence  | Schuster   | 610 Odell Point
```

## Setup

* Fork and clone, cd into this directory
* Run `node tableize.js` to see the output

In `tableize.js` you have 3 variables to work with - `people` and `companies`.  Use these to test your program.

## Stories (MVP)

**Users can see the Markdown table for `people`**

For this story, just focus on getting one table to output correctly.

**Users can see the Markdown table for `people` and `companies`**

For this story, make sure your code is in a function that can take different inputs, in this case `people` and `companies`.

Here you'll _have_ to determine the widths of each column dynamically.

## Stretch Stories

**Users can pass the name of a `.csv` file to parse**

When you run `node tableize.js data/companies.csv`, your program should read the file `data/companies.csv` and display the output.

See

- https://nodejs.org/docs/latest/api/process.html
- https://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options

**Users can parse CSV files that contain quoted values**

Your code should be able to correctly handle CSV files that have values that contain commas.  For example:

```
Name,Suffix,Slogan,DUNS Number
"Sipes, Yundt and Johnston",Group,Right-sized 24 hour knowledge user,55-244-3053
```

Notice how the name is `"Sipes, Yundt and Johnston"`, so if you just split the line on commas, you'd get an incorrect result.  Your code needs to handle this.

**Users can parse CSV files that contain newlines in the cell value**

Your code should be able to correctly handle CSV files that have values that contain newlines.  For example:

```
Name,Suffix,Slogan,DUNS Number
"Sipes, Yundt and Johnston",Group,"Right-sized
24 hour knowledge user",55-244-3053
```

Notice how the example above represents just a single line of CSV.  If you determine what a 'row' is by splitting on newlines, you'll get an incorrect result, since it's valid for 'cells' to have newlines, as long as they are surrounded by quotes.

See http://www.boyet.com/articles/csvparser.html

**Users can produce HTML documents**

When you run your code, it should create a file named `output.html` in the same directory as `tableize.js`.  This `output.html` file should be a valid HTML document, with the data from the CSV displayed as a table, like so:

```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>First</td>
      <td>Row</td>
    </tr>
    <tr>
      <td>Second</td>
      <td>Row</td>
    </tr>
  </tbody>
</table>
```

See https://nodejs.org/api/fs.html#fs_fs_writefilesync_filename_data_options
