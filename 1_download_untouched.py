import requests

def download_file(url, destination):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Check if the request was successful

        with open(destination, 'wb') as file:
            file.write(response.content)

        print(f"OK: File downloaded successfully as {destination}")

    except requests.exceptions.RequestException as e:
        print(f"Error downloading file: {e}")

if __name__ == "__main__":
    url = "https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.user.js"
    destination = "untouched_Bypass_All_Shortlinks.user.js"

    download_file(url, destination)
