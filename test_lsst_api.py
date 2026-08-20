import json
from alerce.core import Alerce

client = Alerce()

print("Fetching LSST objects...")
try:
    lsst_objects = client.query_objects(survey="lsst", format="json", page_size=1)
    print(f"Type: {type(lsst_objects)}")
    print("Content:")
    if isinstance(lsst_objects, list):
        print(json.dumps(lsst_objects, indent=2))
    else:
        print(lsst_objects)
except Exception as e:
    print(f"Error fetching LSST objects via client: {e}")

print("\nFetching specific LSST object AL20lsst12345 (just to see error/response)")
try:
   res = client.query_object("AL20lsst12345", survey="lsst")
   print(res)
except Exception as e:
   print("Error:", e)
