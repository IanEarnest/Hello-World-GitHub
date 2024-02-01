# Markdown Examples2
[[MarkdownExamples]]
[[MarkdownExamples2]]

ToC
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Tips
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Examples
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Headers
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Line
<br/>


# Tips
1. You can use HTML
e.g. 
```HTML
<br/>
```
<br/>

2. Spaces
```HTML
&nbsp; Regular space 
&ensp;  Two spaces gap 
&emsp;    Four spaces gap
```
3. Other
<br/>
aaa
[[MarkdownExamples]]

# Examples
## Code section
```SQL
SELECT *
FROM test_db.my_table
WHERE id > 5
GROUP BY Age
LIMIT 10
```

## Headers - H1 to H6
# H1
## H2
### H3
#### H4
##### H5
###### H6

## Line = ---
---


# Other Markdown things
## Jeckll templates
Page title - {{ page.title }}

## JS in Markdown
### Reference file and display button
```js
<script src="scripts.js"></script>
<button type="button" onclick="GetDateAndDisplay()">
	Show Date and Time
</button>
<p id="showDate">
	0000
</p>
```
<script src="scripts.js"></script>
<button type="button" onclick="GetDateAndDisplay()">
	Show Date and Time
</button>
<p id="showDate">
	0000
</p>

### Inline JS
```js
<button type="button"
onclick="document.getElementById('inlinedatetime').innerHTML = Date()">
	Show inline date time
</button>
<p id="inlinedatetime">
	0000
</p>
```
<button type="button"
onclick="document.getElementById('inlinedatetime').innerHTML = Date()">
	Show inline date time
</button>
<p id="inlinedatetime">
	0000
</p>