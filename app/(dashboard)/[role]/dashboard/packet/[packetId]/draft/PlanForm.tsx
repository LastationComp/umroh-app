import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { arrayReducer } from "@/lib/Handling/reducer";
import React, { useMemo, useReducer } from "react";

export default function PlanForm({ data }: { data?: any[] }) {
  const [plans, dispatch] = useReducer(
    arrayReducer,
    data?.length === 0 ? [{}] : data
  );

  const addPlan = () => {
    dispatch({ type: "add" });
  };

  const removePlan = () => {
    dispatch({ type: "remove" });
  };

  useMemo(() => {
    if (data?.length !== 0)
      dispatch({
        type: "reFetch",
        data: data,
      });
  }, [data]);
  return (
    <section className="grid gap-3 md:w-1/2">
      <span>Rencana Perjalanan</span>

      <Card className="flex flex-col p-3 gap-1.5">
        {plans &&
          plans.map((plan: any, index: number) => (
            <div className="grid gap-1.5" key={index}>
              <Label htmlFor="description_travel_packet_plan">
                Hari ke {index + 1}
              </Label>
              <Textarea
                id="description_travel_packet_plan"
                defaultValue={plan?.description ?? ""}
                className="w-full"
                name="description_travel_packet_plan[]"
                placeholder="Masukkan Deskripsi Disini..."
              />
              <input type="hidden" name="plan_ids[]" value={plan?.id ?? ""} />
            </div>
          ))}

        <div className="flex items-center gap-3">
          <Button type="button" onClick={addPlan}>
            Tambah
          </Button>
          {plans && plans?.length > 1 && (
            <Button type="button" variant={"destructive"} onClick={removePlan}>
              Hapus
            </Button>
          )}
        </div>
      </Card>
    </section>
  );
}
