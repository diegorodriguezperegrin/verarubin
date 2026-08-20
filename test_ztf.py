import json
from alerce.core import Alerce

client = Alerce()

try:
    ztf_objects = client.query_objects(survey="ztf", format="json", page_size=1)
    if 'items' in ztf_objects and len(ztf_objects['items']) > 0:
        print("ZTF Example object:")
        print(json.dumps(ztf_objects['items'][0], indent=2))
except Exception as e:
    print(f"Error ZTF: {e}")
