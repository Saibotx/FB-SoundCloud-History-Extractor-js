
var fileEntryNumber = "entry.279016075";
var googleFormsURL = 'https://docs.google.com/forms/d/e/1FAIpQLSe-c-SBet2C4XBl_q0U6ztDuQ8bjQB65xDGOKHakEHD73aTjA/formResponse?';
var startingCount = 0;
var endingCount = x.length;

var i = startingCount;
var x = document.getElementsByClassName("fwb");

iframeDidLoad();


console.log("just did it! tracks from number:" + startingCount + " to " + endingCount );


function postForm(element, counter) {
        var entryValue = element.innerHTML.replace(" ",'%20').replace("&amp;","%26").replace('"', '%22').replace('=', '%3D').replace(';', '%3B').replace('?', '%3F');
        var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSe-c-SBet2C4XBl_q0U6ztDuQ8bjQB65xDGOKHakEHD73aTjA/formResponse?';
        var submitRef = '&submit=Submit';
        var submitURL = (googleFormsURL + fileEntryNumber + "=" + entryValue + submitRef);
        var blankiFrame = document.createElement("iframe");
   		blankiFrame.id  = 'no-target' + counter;
        blankiFrame.src = submitURL;
        console.log("submitURL is " + submitURL);
        blankiFrame.setAttribute("onLoad", "iframeDidLoad();");
        document.body.appendChild(blankiFrame);
        return false;
    }

function iframeDidLoad() {
	//increment i
if (i != startingCount) {
		document.getElementById(("no-target" + (i-1))).remove();
}
	if (i < x.length - 1 && i < endingCount) {
		console.log("posting for " + x[i].innerHTML + i);
		postForm(x[i], i);
		i++;
	} 
	else {
		console.log("completed.");
	}

}
