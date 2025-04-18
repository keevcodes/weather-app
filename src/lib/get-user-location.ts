import { WebServiceClient } from "@maxmind/geoip2-node";

const client = new WebServiceClient(process.env.MAXMIND_ACCOUNT_ID!, process.env.MAXMIND_LISCENSE_KEY!, {host: 'geolite.info'});


export const getUserLocationCoordinates = async (ipAddress: string) => {
    const defaultCoordinates = {
        latitude: -33.3013, // Grahamstown, South Africa
        longitude: 26.5325,
    }
    
    try {
        const city = await client.city(ipAddress);
        const { longitude, latitude } = city?.location || defaultCoordinates;

        return { longitude, latitude };

    }  catch (error) {
        console.error("Error fetching location data:", error);
        return defaultCoordinates;
    }

}

