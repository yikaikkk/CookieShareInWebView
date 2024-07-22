This is an example of cookie sharing in a small program web-view
In the mini program, data can be shared between the web-view and the mini program through the specified interface.
Therefore, when a certain mini program sends privacy to the H5 page embedded in the web-view component, and the privacy message is saved as a cookie by the H5 page, when other mini programs also 
embed H5 under the same domain name in the web-view. When the user enters H5 under the same domain name in the web-view of other mini-programs, even if the user has not logged in, the data will be shared between the two mini-programs. the user's login status can also be obtained through cookies to track user behavior.
At the same time, through the specified interface, the mini program can also obtain cookie messages from the H5 page in the web-view.
As shown below
![](README_files/2.jpg) 