"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { arrayReducer } from "@/lib/Handling/reducer";
import { useMemo, useReducer } from "react";

export default function FacilitiesForm({ facilities }: { facilities: any[] }) {
  const [facilitiesData, dispatch] = useReducer(
    arrayReducer,
    facilities.length === 0 ? [{}] : facilities
  );

  const addData = () => {
    dispatch({
      type: "add",
    });
  };

  const removeData = () => {
    dispatch({
      type: "remove",
    });
  };

  useMemo(() => {
    if (facilities.length === 0) return;
    dispatch({
      type: "reFetch",
      data: facilities,
    });
  }, [facilities]);

  return (
    <section className="grid md:grid-cols-2 gap-5">
      <section>
        <div className="grid gap-1.5">
          {facilitiesData &&
            facilitiesData.map((data: any, index: number) => (
              <section key={index}>
                <Card className="flex max-md:flex-col-reverse justify-between items-center gap-3 p-3 rounded-sm">
                  <Input
                    key={index}
                    name="include_facility_descriptions[]"
                    placeholder="Masukkan Fasilitas yang termasuk disini..."
                    required
                    defaultValue={data?.description}
                  />
                  <RadioGroup
                    name={`facilities_include_exclude[${index}]`}
                    orientation={"horizontal"}
                    className="flex gap-3 w-full px-auto"
                    defaultValue={String(data?.is_included ?? "1")}
                  >
                    <div className="flex items-center gap-1">
                      <RadioGroupItem value="1" id={"include-" + index} />
                      <Label htmlFor={"include-" + index}>Termasuk</Label>
                    </div>

                    <div className="flex items-center gap-1">
                      <RadioGroupItem value="0" id={"exclude-" + index} />
                      <Label htmlFor={"exclude-" + index}>Tidak Termasuk</Label>
                    </div>
                  </RadioGroup>
                  <Input
                    className="hidden"
                    value={data?.id ?? ""}
                    readOnly
                    name="include_facility_id[]"
                  />
                </Card>
              </section>
            ))}
          <div className="flex items-center gap-1.5">
            <Button type="button" onClick={addData}>
              Tambah
            </Button>
            {facilitiesData.length > 1 && (
              <Button
                type="button"
                variant={"destructive"}
                onClick={removeData}
              >
                Hapus
              </Button>
            )}
          </div>
        </div>
      </section>
    </section>
  );
}
