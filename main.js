
//for user to modify
var fileEntryNumber = "entry.934694304";
var linkEntryNumber = "entry.1912053358";
var googleFormsURL = 'https://docs.google.com/forms/d/e/1FAIpQLScJ5ku6RrahRVJM69Y9MvppQacAGTTWPild-8vqQhML8ZMVOA/formResponse?';
var onlyPostInvalidLinks = true;

//please test in the format googleFormsURL + linkEntryNumber + fileEntryNumber
//ie. https://docs.google.com/forms/d/e/1FAIpQLScJ5ku6RrahRVJM69Y9MvppQacAGTTWPild-8vqQhML8ZMVOA/formResponse?entry.1912053358=testing&entry.934694304=testing2&submit=Submit




var startingCount = 0;
var i = startingCount;
var y = document.getElementsByClassName("_51m- vTop _5ep6");
var endingCount = y.length;

formIframeDidLoad();

function formIframeDidLoad() {
	//if it isnt the first instance, theres no iframes to remove.
	//else remove the last postForm iframe
	if (i != startingCount) {
		var noTarget = document.getElementById(("no-target" + (i-1)));
		if (noTarget != null) {
			noTarget.remove();
		}
	}
	if (i < y.length - 1 && i < endingCount) {
		var name = y[i].getElementsByClassName("fwb")[0].innerHTML;
		var links = y[i].getElementsByTagName('a');
		if (links == null || links.length != 1) {
			console.log("invalid link.");
			i++;
			iframeDidLoad();
			return
		} 
		else {
			var link = links[0].href.split("?u=")[1];
			if (link == null) {
				link = links[0].href;
			}
			
		
				console.log("posting for " + name + " link: " + link + i);
				postForm(name, link, i);
				i++;
		}
	} 
	else {
		console.log("just did it! tracks from number:" + startingCount + " to " + endingCount );
	}
}

function soundcloudIframeDidLoad(name, link, counter) {
	console.log("iframeLoaded");
	// var iframe = document.getElementById('soundCloudiFrame');
	// if (iframe != null) {
	// 	var innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
	// 	if (innerDoc.getElementsByClassName("title__h1").length == 0 ) {
	// 		console.log("found A FAILED LINK");
	// 		postForm(name,link,counter);
	// 	} 
	// 	else {
	// 		formIframeDidLoad();
	// 	}
	// 	iframe.remove();
	// } else {
	// formIframeDidLoad();	
	// }
	
}

function postForm(name, link, counter) {
    var entryValue = name.replace(" ",'%20').replace("&amp;","%26").replace('"', '%22').replace('=', '%3D').replace(';', '%3B').replace('?', '%3F');
    var linkValue = link.replace(" ",'%20').replace("&amp;","%26").replace('"', '%22').replace('=', '%3D').replace(';', '%3B').replace('?', '%3F');
    var submitRef = '&submit=Submit';
	var submitURL = (googleFormsURL + fileEntryNumber + "=" + entryValue + "&" + linkEntryNumber + "=" + linkValue + submitRef);
	var blankiFrame = document.createElement("iframe");
	blankiFrame.id  = 'no-target' + counter;
	blankiFrame.src = submitURL;
	console.log("SUBMITTING TO GOOGLE: element " + counter + " submitURL is " + submitURL);
	blankiFrame.setAttribute("onLoad", "formIframeDidLoad();");
	document.body.appendChild(blankiFrame);
	return false;
}



