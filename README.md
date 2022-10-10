# README

**This project is a work in progress and not ready for deployment at this moment**  

My Lay-Z-SPA doesn't have any WiFi module, making it impossible to do any automation or remotely control the unit. I found a solution to the problem when I came across a brilliant project on GitHub called [WiFi-remote-for-Bestway-Lay-Z-SPA
   ](https://github.com/visualapproach/WiFi-remote-for-Bestway-Lay-Z-SPA). Given the solution, I wanted to enhance the web interface, making it easy to use from mobile and even adding some screens that I could use on a tablet. I have started this project and intend to replace the web interface onboard with this web interface. I also want to test new technologies and learn new approaches.

This project has two goals.

1. Learn to work with a new stack and tools and test new tech.
2. Replace the web interface in the brilliant [WiFi-remote-for-Bestway-Lay-Z-SPA
   ](https://github.com/visualapproach/WiFi-remote-for-Bestway-Lay-Z-SPA)
   by [visualapproach](https://github.com/visualapproach)

## Learn new stuff
This project is built with React. Scaffolded with Create React App.
Tailwind is used for CSS and Storybook for developing components.

## Replace the web interface
The goal is to replace the onboard web interface shipped with the module developed by [visualapproach](https://github.com/visualapproach). The aim here is to compile the react app, minimize it and put it on a web page or CDN, where the web app can load the javascript file.
By replacing the body in `index.html` with this code:
```HTML
<div id="root"></div>
<script src="https://somehting/webinterfacev2.js" type="text/javascript"></script>
```
### Mock server
This project also has a mock server, so its possible to develop without an actual Lay-Z-SPA module. 