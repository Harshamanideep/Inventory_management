import requests

def get_location():
    try:
        # Use ipinfo.io API to get location based on IP
        response = requests.get('https://ipinfo.io/')
        data = response.json()

        # Extract location details
        city = data.get('city')
        # region = data.get('region')
        # country = data.get('country')
        # loc = data.get('loc')  # latitude and longitude
        # print(f"Region: {region}")
        # print(f"Country: {country}")
        # print(f"Location (Latitude, Longitude): {loc}")

        return city# , region, country, loc
    except Exception as e:
        print(f"Error fetching location: {e}")
        return None


# Get the location details
get_location()
