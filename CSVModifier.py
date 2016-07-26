# PYTHON SCRIPT TIME
# This checks for all files in tracks.csv (the one you downloaded from google sheets/forms) to see if they're valid.
# all tracks that have been deleted are put into "deletedTracks.csv"

import csv
import urllib2
post_params = {'foo' :'bar'}
with open("tracks.csv", "rb") as f:
	reader = csv.reader(f, delimiter = ",")
	for row in reader:
		if row[0] != "Timestamp" :
			shouldAppend = None
			print("checking " + row[2])
			try:
				urlOpened = urllib2.urlopen(row[2])
				if urlOpened.code == 200:
					print "Bingo!"
				else :
					print "Found an error!"
					shouldAppend = True
			except urllib2.HTTPError as err :
				if err.code == 404 :
					shouldAppend = True
				else :
					raise err.code
					
			if shouldAppend == True:
					with open("deletedTracks.csv", "a") as myFile:
						writer = csv.writer(myFile, quoting=csv.QUOTE_ALL)
						writer.writerow(row)