import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { arrayReducer } from "@/lib/Handling/reducer";
import React, { useMemo, useReducer } from "react";

export default function TermsAndConditions({ data = [] }: { data?: any[] }) {
  const [tacs, dispatch] = useReducer(
    arrayReducer,
    data.length === 0 ? [{}] : data
  );

  const addPlan = () => {
    dispatch({ type: "add" });
  };

  useMemo(() => {
    if (data.length !== 0)
      dispatch({
        type: "reFetch",
        data: data,
      });
  }, [data]);

  const removePlan = () => {
    dispatch({ type: "remove" });
  };
  return (
    <section className="grid gap-3 md:w-1/2">
      <span>Syarat & Ketentuan</span>

      <Card className="flex flex-col p-3 gap-1.5">
        {tacs &&
          tacs.map((tac: any, index: number) => (
            <div className="grid gap-1.5" key={index}>
              <Input
                id="description_terms_and_condition"
                defaultValue={tac?.description ?? ""}
                className="w-full"
                name="description_terms_and_condition[]"
                placeholder="Ketik Disini..."
              />
              <input type="hidden" name="tac_ids[]" value={tac?.id ?? ""} />
            </div>
          ))}

        <div className="flex items-center gap-3">
          <Button type="button" onClick={addPlan}>
            Tambah
          </Button>
          {tacs && tacs?.length > 1 && (
            <Button type="button" variant={"destructive"} onClick={removePlan}>
              Hapus
            </Button>
          )}
        </div>
      </Card>
    </section>
  );
}
