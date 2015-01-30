Brookings Essay Template
========================

The files contained in this Github repository contain everything you need to start coding a new essay. Please make sure to read these instructions carefully so you know how to properly use them!


Initial Setup Instructions
--------------------------

Before you can start using the template you need to do the following. Note you only need to do this once.

1.  Download MAMP (http://www.mamp.info/en/) and install it on your local machine. The free version will work just fine.
2.  Download this repository as a zip from Github.
3.  Extract the zip and move the folder it contains into your MAMP 'htdocs' directory. By default, this directory is loacted here: Applications/MAMP/htdocs
4.  Give the extracted folder a title like 'Essay Template' or whatever you'd like.
5.  Within the extracted folder you'll find a folder titled 'MOVE ME'. Move this folder _out_ of the extracted folder and _into_ the base 'htdocs' directory. Change its name to '~' without quotes. This allows you to view the template locally as if it were hosted on Sitecore.

Note that you will also need SASS (http://sass-lang.com/) and Compass (http://compass-style.org/) installed in order to compile SCSS files into CSS. If you don't like working in the Terminal, you can also use a program like Prepros (https://prepros.io/) for this purpose.


Steps for creating a new essay
------------------------------

1.  Make sure MAMP is running.
2.  Make a new copy of the 'Essay Template' folder template from step 4 of the Initial Setup Instructions.
3.  Place the copy in MAMP's 'htdocs' directory. Give it a new name. If you were to name it 'foobar', you would view it in your browser at: http://localhost:8888/foobar/
4.  Make your HTML and SCSS changes on this new copy of the template. You should not overwrite the original template.
5.  __template.html__ provides further editing instructions and can be used as an initial starter template for your essay.
6.  __plugins.html__ provides examples of all the Javascript plugins included in the base template.
7.  __layout.html__ provides example HTML for various media containers, blockquotes and other elements you may want to reuse.
8.  Style changes should only be made in __sass/_customizations.scss__ and __sass/_variables.scss__. Note that Compass or Prepros (or a similar program) must be running and watching the project folder in order for changes to be translated into CSS.


Uploading to Sitecore
---------------------
1.  Upload your compiled CSS document to Sitecore. You do not need to upload any other CSS or SCSS. It can be found here: __stylesheets/styles.css__.
2.  Near the top of your HTML file, change the URL for styles.css to the URL of the file you just uploaded to Sitecore.
3. Upload the HTML into a new article in Sitecore.


Notes and Misc.
---------------

For more information on how to use Bootstrap, the framework upon which the essay template is built, please see the Bootstrap documentation: http://getbootstrap.com/

The essay template uses bootstrap-sass-3.1.1 downloaded 6/3/2014.