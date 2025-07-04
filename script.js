const contentDiv = document.getElementById('contentDiv');
const htmlTab = document.getElementById('htmlTab');
const cssTab = document.getElementById('cssTab');
const jsTab = document.getElementById('jsTab');
const image = document.getElementById('image');


const htmlContent = `HTML (HyperText Markup Language) was created in 1991 by Tim Berners-Lee to structure `+
`and link documents on the emerging World Wide Web. Initially simple, it included basic tags for text, links, `+ 
`and images. HTML 2.0 standardized early features in 1995, followed by HTML 3.2 and 4.01, which added tables, `+
`scripts, and styles. XHTML emerged in 2000, enforcing stricter XML rules. In 2008, HTML5 began development, `+
`introducing semantic tags, multimedia support, and APIs for modern web apps. HTML5 became the standard in 2014. `+
`Today, HTML continues evolving under the WHATWG, forming the foundation of virtually all web content.`;

const cssContent = `CSS (Cascading Style Sheets) was introduced by Håkon Wium Lie in 1996 to separate content `+
`from presentation in HTML documents. CSS1 standardized basic styling like fonts and colors. CSS2, released in 1998, `+
`added positioning, media types, and z-index. CSS2.1 refined these features, improving browser compatibility. `+
`Development stalled for a time, but CSS3 revived interest by introducing modules like Flexbox, Grid, animations, `+
`and transitions. These allowed more responsive and dynamic designs. Today, CSS is maintained by the W3C, with `+
`ongoing updates enabling advanced layouts and design features. It remains essential for controlling the visual `+
`appearance of web pages across devices.`;

const jsContent = `JavaScript was created in 1995 by Brendan Eich at Netscape as a lightweight scripting language`+ 
`for adding interactivity to web pages. Initially called Mocha, then LiveScript, it was renamed JavaScript for`+ 
`marketing purposes. Standardized as ECMAScript in 1997, JavaScript grew beyond simple browser tasks.`+ 
`Early versions had limited capabilities, but widespread adoption led to powerful frameworks like jQuery `+
`in the 2000s. HTML5 and AJAX expanded its role in dynamic web apps. ECMAScript 6 (ES6) in 2015 introduced `+
`major features like classes and modules. Today, JavaScript powers both front-end and back-end development `+
`(e.g., Node.js) and is essential in modern web development.`

const changeToHtml = () =>{
    contentDiv.innerText = htmlContent;
    image.src = 'images/html.jpg';
    htmlTab.className = 'live';
    cssTab.className = '';
    jsTab.className = '';
    contentDiv.className = 'live'
};

const changeToCss = () =>{
    contentDiv.innerText = cssContent;
    image.src = 'images/css.jpg';
    htmlTab.className = '';
    cssTab.className = 'live';
    jsTab.className = '';
};

const changeToJs = () =>{
    contentDiv.innerText = jsContent;
    image.src = 'images/javascript.jpg';
    htmlTab.className = '';
    cssTab.className = '';
    jsTab.className = 'live';
};

htmlTab.addEventListener('click', changeToHtml);
cssTab.addEventListener('click', changeToCss);
jsTab.addEventListener('click', changeToJs);