# FB-SoundCloud-History-Extractor-js
Looking for old liked songs on soundcloud that have been deleted? This script iterates through your facebook history and fetches all previously liked songs.


**TO USE:**<br>
1. Create a google forms sheet with two short question response (one for track name, one for the URL). <br>
2. Go to "view form" (top right)<br>
3. Right click the form --> Inspect. Ctrl+F "entry"<br>
4. grab the entry number (should be two entry numbers in the form of entry.934827438234.<br>
5. grab the form URL<br>
6. Open the .js file in a text editor and input the form URL and entry numbers into top of script
7. go to your facebook profile, click top right (activity log). <br>
8. On the left, filter by Soundcloud activity FB activity log.<br>
8. keep scrolling down until your entire soundcloud activity history is there on that one page<br>
9. Rightclick page --> Inspect (for chrome). Click Console<br>
10. There will be a huge STOP warning telling you not to run scripts here. Ignore this because you're a bad ass mofo.<br>
11. Copy + Paste entire J.S. text into browser console and it'll auto fill out your google form :)<br>
12. Go back to your google form, click on responses (dont close the facebook tab or page. It'll run until it inputs all your previous activity into the google sheet).<br>
13. Download your responses as a CSV. save it as tracks.csv in the same folder as the .py file (this directory)<br>
14. Now run the .py file (for mac, open terminal, type python, click & drag the .py file into the terminal window, hit enter)<br>
15. it'll generate a file containing all deleted tracks. If you get fed up and its too slow, press ctrl+c to exit it (sorry D:)<br>
<br>
p.s. I've included a sample of my tracks and deleted tracks for y'all to see.
p.p.s. i realize this is kind of slow. SORRY D: - but hey, at least you get all your old tracks back :)?
p.p.p.s. i'm a shitty js and python developer (if you could even call me a developer). Instead i make iPhone apps. Support me by downloading http://okeylabs.com 

