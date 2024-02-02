---
---

TODO Learning markdown
```dataviewjs 
dv.view('toc') // toc.js in root 
```
[Markdown Guide](https://www.markdownguide.org/tools/obsidian/)
[Markdown Examples](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax)
[Markdown Course](https://blog.webdevsimplified.com/2023-06/markdown-crash-course/)


# Styles
**Bold** 
<u>Underline</u>
*Italic* 
~~Strikethrough~~
==Highlight==, <mark>Marked text</mark> <span style="background-color: #999999">Span text</span>

> Block quote >

Line --- 

--- 

# Links
## External
[Obsidian Help](https://help.obsidian.md)

## Internal
Link to document, link to header, direct link/ show file

[[Markdown]]
[[Markdown#External]]
![[Markdown#External]]
## iframe
 <iframe width="160" height="115" src="https://www.youtube.com/embed/qjWq4ck2-0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	

# Inline code
`hello [[aaa]]`
```python
print('hello world')
```

# Table

| A   | B   | C   |
| --- | --- | --- |
| A   | B   | C   |



# Callouts
> [!NOTE] Title
> Contents

> [!question] Title
> Contents

> [!warning]- Title
> Contents


# Referencing
Hello world [^hw]
[^hw] Heeeeelow worrrrld

# Search embedding
```query
obsidian -vault -path:/1 today
```
