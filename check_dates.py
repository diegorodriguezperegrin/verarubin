import requests

url = "https://api.alerce.online/ztf/v1/objects/?classifier=stamp_classifier&class=SN&page_size=50&order_by=firstmjd&order_mode=DESC"
res = requests.get(url).json()
items = res.get('items', [])

print(f"Total returned: {len(items)}")
if items:
    print(f"Most recent: {items[0]['firstmjd']}")
    print(f"Oldest in batch: {items[-1]['firstmjd']}")
