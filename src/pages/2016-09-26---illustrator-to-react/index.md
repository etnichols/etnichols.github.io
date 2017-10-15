---
title: "Using Python to Convert Illustrator SVGs to React components"
date: 2016-09-26
tags:
- React
- Illustrator
- Python
draft: false
author: Evan Nichols
---

I've been working on a project the past few months for a team of doctors at the KU Medical Center -- Dr. Garth Fraga, Dr. Arlette-Habashi and Matt DaCunha, a third-year medical student. We're making RightSite, an iOS application aimed at reducing biopsy-labeling errors in the clinical setting.

The app is comprised of about 30 different images of the human body, which users can click on to see the anatomically correct labeling.

![](demo.gif)

I use Adobe Illustrator to make the interactive overlays for the illustrations. I export the overlay as an SVG, which I then use to create a [React Native SVG](https://github.com/react-native-community/react-native-svg) component. Unfortunately, the conversion from SVG to React Component is quite tedious. Removing useless defs and styles, uppercasing all the different shapes, removing the underscores between the path IDs -- all the stuff that makes your wrist ache and eyes glaze over. So I invested an afternoon to automate the conversion. The result: 50 lines of Python I wish I had wrote at the beginning of this project.

```python
import sys
import re

def caps(str):
    str = str.replace("_1_\"","\")}")
    str = str.replace("_2_\"","\")}")
    str = str.replace("_3_\"","\")}")
    str = str.replace("_"," ")
    str = str.replace("fill-rule=\"evenodd\" clip-rule=\"evenodd\"","")
    #XX used as marker for addProps function
    str = str.replace("fill=\"#2895B2\"", "XX")
    str = str.replace("path","Path")
    str = str.replace("ellipse","Ellipse")
    str = str.replace("rect", "Rect")
    str = str.replace("polyline","Polyline")
    str = str.replace("circle","Circle")
    return str

def createTag(str):
    matches=re.findall(r'\"(.+?)\"',str)
    w = matches[2][:-2]
    h = matches[3][:-2]
    vb = matches[4]
    return( "<Svg width=\"" + w + "\" "+"height=\"" + h + "\" " + "viewBox=\"" + vb + "\">\n" )

def addProps(str):
    matches=re.findall(r'\"(.+?)\"',str);
    id = matches[0]
    str = str.replace("id=","onPressIn={() => this._appendEvent(")
    injection = "fill={consts.defaultFill} fillOpacity={this.state.selected == \""+ id + "\" ? consts.selected : consts.visible}"
    str = str.replace("XX",injection)
    return str

def main():
    output = open(sys.argv[2],"w+")
    with open(sys.argv[1],"r") as input:
        f = input.readlines()[7:-1]
        #opening tag
        output.write( createTag(f[0]) )
        lineno = 0
        for line in f:
            if lineno > 3:
                line = caps(line)
                if line[0] == '<':
                    line = addProps(line)
                    output.write(line)
                else:
                    output.write(line)
            lineno += 1
        #closing tag
        output.write("</Svg>")

if __name__ == "__main__":
    main()
```

Looking at the program function by function:
- **caps(str)**: remove Adobe Illustrator layer name suffixes and underscores (e.g. "Some_Layer_1_" become s"Some Layer"). Uppercase all SVG elements.
- **createTag(str)**: create the opening opening tag for the [react-native-svg](https://github.com/react-native-community/react-native-svg) component. The raw SVG export from Adobe contains a line like this:
```
"x="0px" y="0px" width="180px" height="626px" viewBox="-0.5 -0.3 180 626"
```
We care about the quoted values, which are used within the tag. [Python's regular expressions](https://docs.python.org/2/library/re.html) are very handy for this.
- **addProps(str)**: Create the onPress function and "inject" style values into the individual SVG elements. This allows user to interact with the individual components of the SVGs. Another example line:
```
<path id="Fifth_right_distal_plantar_toe_1_" fill-rule="evenodd" clip-rule="evenodd" fill="#2895B2" d="..."/>
```
First, we convert the id variable into the OnPressIn function using a simple replace call. Next, create the "injection" string containing the style values, and insert this into the tag using the "XX" string that was inserted in the caps() function earlier.
- **main()**: open the input SVG and write to the output SVG using the functions above. To run this script from the CLI:
```
python clean.py <INPUT_SVG> <OUTPUT_SVG>
```
The <INPUT_SVG> will be parsed, and the finished file will be written to <OUTPUT_SVG> in the same directory. If it does not already exist, the <OUTPUT_SVG> file will be created automatically (no need to make an empty SVG file to pass in).

Main tosses out the top 8 lines of the input SVG. It is useless within the react-native-svg component. After creating the opening tag, the remainder of the file is processed. The addProps() function is called if an "<" opening tag is encountered; all other lines are written to the output without change.

Performing the SVG conversions by hand isn't a *broken* process, but it is woefully *inefficient*. And inefficient processes are bad. But I always grapple.

*"Is it worth it to take a day and address this inefficiency? I have a lot of other shit to do."*

Let this script serve to show: it most definitely IS worth it. Eliminate repetitive tasks by keeping a keen eye for automation opportunities in your workflows.

---
P.S. See [this post](https://github.com/react-native-community/react-native-svg/issues/157) on why to use onPressIn() instead of OnPress() to ensure the user interactions will work correctly Apple phones with 3D touch.
