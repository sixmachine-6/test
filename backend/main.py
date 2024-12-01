import sys
import json

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(sys.argv)
        print(json.dumps({"status": "fail", "message": "No query provided"}))
        sys.exit(1)

    query = sys.argv[1]
    response = {
        "status": "success",
        "message": f"Query received: {query}"
    }

    print(json.dumps(response)) 

