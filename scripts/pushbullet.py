import praw
import time
import requests
import json

USER_AGENT = 'Discussion thread notifier by /u/rutigs'
ACCESS_TOKEN = 'voYFPTEAilrYtoBSqmyAEl29OdyvvaEX'

r = praw.Reddit(user_agent=USER_AGENT)
# r.login(REDDIT_ID, REDDIT_PASS)

already_done = [] # for storing the uids of posts already notified

while True:
    sub = r.get_subreddit('hiphopheads')
    data = sub.get_new(limit=25)
    for x in data:
        if 'Discussion' in x.title:
			url = 'https://api.pushbullet.com/v2/pushes'
			data = json.dumps({
				'type': 'link',
				'title': x.title,
				'body': 'make da poll bruv',
				'url': x.url
			})
			headers = {
				'Authorization': 'Bearer ' + ACCESS_TOKEN, 
				'Content-Type': 'application/json'
			}
			r = requests.post(url=url, data=data, headers=headers)
    print "Last checked for Discussions at", time.strftime("%d %b - %I:%M:%S %p")
    time.sleep(600)

url = 'https://api.pushbullet.com/v2/pushes'
data = json.dumps({
	'type': 'note',
	'title': 'Script Stopped',
	'body': 'Pushbullet.py has stopped checking for new threads',
	'url': x.url
	})
headers = {
	'Authorization': 'Bearer ' + ACCESS_TOKEN, 
	'Content-Type': 'application/json'
}
r = requests.post(url=url, data=data, headers=headers)