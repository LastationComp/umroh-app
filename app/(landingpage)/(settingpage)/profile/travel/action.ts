"use server"

import { AuthOptions } from "@/app/api/auth/AuthOptions"
import { newApiFetch } from "@/lib/Fetcher";
import { getServerSession } from "next-auth"

export async function getTravelProfile(){
    const session = await getServerSession(AuthOptions);
    const travelId = session?.user.travel.id;
    const res = await newApiFetch({
        url: '/api/profile/travel/' + travelId,
        token: session?.user.tokenApi ?? '',
        options: {
            tag: ['travel-profile']
        }
    });

    const result = await res.json();
    
    return result.data;
}

export async function getCountries(){
    const session = await getServerSession(AuthOptions);
    const res = await newApiFetch({
        url: '/api/data/countries',
        token: session?.user.tokenApi ?? '',
    });

    const result = await res.json();
    return result.data;
}

export async function getProvinces(){
    const session = await getServerSession(AuthOptions);
    const res = await newApiFetch({
        url: "/api/data/provinces",
        token: session?.user.tokenApi ?? '',
    })

    const result = await res.json();
    return result.data;
}

export async function getCities(){
    const session = await getServerSession(AuthOptions);
    const res = await newApiFetch({
        url: "/api/data/cities",
        token: session?.user.tokenApi ?? "",
    })

    const result = await res.json();
    return result.data;
}