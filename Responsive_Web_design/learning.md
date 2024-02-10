How to determine the specific width for the container when using both width and max-width properties together?

 Using both width and max-width properties together,the browser will first look at the max-width property. If the max-width property is greater than the width property, the browser will set the width of the container to the value of the width property. However, if the max-width property is less than the width property, the browser will ignore the width property and set the width of the container to the value of the max-width property. It ensures that the width of the container never exceeds the max-width value, even if the width property is set to a larger value.

###### Css relative Unit

1. `em`: The `em` unit is based on the font-size of the parent element. For example, if the parent element has a font-size of 20px, then "1em" would be equal to 20px for that element. If an element has a font-size of 1em, it would be equal to the font size of the parent element. 

2. `rem`: The `rem` (root em) unit is based on the font-size of the root element (html). This means that 1rem equals the font size of the html element (which by default is 16px in most browsers). So, if the html font-size is set to 20px, then "1rem" would be 20px.

The main difference between `em` and `rem` lies in their reference point. `em` is relative to the font size of its closest parent, while `rem` is only relative to the root (html) font size.  `rem` is more predictable and easier to control, while `em` can be more dynamic and adaptable to its context.

### Problem related to Using em?

 Problem related to using em is that it can lead to compounding sizes and unexpected results. This is because em is relative to the font-size of its closest parent element. If  nest elements and style them with em, the font sizes can compound and become larger or smaller than intended. This is often referred to as the "compounding effect" or "em cascade".

  For example, if we have a paragraph (p) inside a body tag and you set the font size of the body to be 16px, then 1em for the paragraph will be equal to 16px. If you set the font size of the paragraph to be 1.25em, then the actual font size of the paragraph will be 20px (1.25 * 16).

  