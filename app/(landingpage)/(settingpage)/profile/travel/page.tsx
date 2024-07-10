import { Separator } from "@/components/ui/separator";
import TravelProfileForm from "./TravelProfileForm";
import {
  getCities,
  getCountries,
  getProvinces,
  getTravelProfile,
} from "./action";

export default async function TravelProfilePage() {
  const travelProfile = await getTravelProfile();
  const countries = await getCountries();
  const provinces = await getProvinces();
  const cities = await getCities();
  return (
    <section className="flex flex-col gap-3">
      <span className="font-bold">Profil Travel Saya</span>
      <Separator />
      <TravelProfileForm
        travelProfile={travelProfile}
        countries={countries}
        provinces={provinces}
        cities={cities}
      />
    </section>
  );
}
