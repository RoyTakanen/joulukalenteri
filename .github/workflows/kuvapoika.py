from os import environ, path, mkdir
from datetime import datetime

import requests
import random
import sys

# TODO: tarkasta onko löydetty kuva jo kalenterissa

api_key = environ.get('PIXABAY_KEY')

day_number = datetime.today().strftime('%d')

# Tarkasta onko kuvat kansio olemassa, koska ensimmäisenä päivänä sitä ei ole
if not path.isdir('kuvat'):
    mkdir('kuvat')

words = [
    "winter+wonderland",
    "santa+claus",
    "christmas+eve",
    "christmas+tree",
    "christmas"
] # Erottele sanat + merkillä

word = random.choice(words)

images = requests.get(f"https://pixabay.com/api/?key={api_key}&q={word}&image_type=photo").json()["hits"]

image = random.choice(images)
image_url = image["largeImageURL"]

img_data = requests.get(image_url).content
with open('kuvat/' + day_number + '.jpg', 'wb') as handler:
    handler.write(img_data)
