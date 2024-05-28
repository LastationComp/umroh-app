import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useReducer } from 'react';

function TACReducer(state: any, action: any) {
  switch (action.type) {
    case 'add': {
      return [...state, action?.data ?? {}];
    }
    case 'remove': {
      let array = [...state];
      array.pop();
      return array;
    }
  }
}

export default function TermsAndConditions({ data = [] }: { data?: any[] }) {
  const [tacs, dispatch] = useReducer(TACReducer, data ?? [{}]);

  const addPlan = () => {
    dispatch({ type: 'add' });
  };

  const removePlan = () => {
    dispatch({ type: 'remove' });
  };
  return (
    <section className="grid gap-3 md:w-1/2">
      <span>Syarat & Ketentuan</span>

      <Card className="flex flex-col p-3 gap-1.5">
        {tacs &&
          tacs.map((tac, index) => (
            <div className="grid gap-1.5" key={index}>
              <Input id="description_terms_and_condition" defaultValue={tac?.description ?? ''} className="w-full" name="description_terms_and_condition[]" placeholder="Ketik Disini..." />
              <input type="hidden" name="tac_ids[]" value={tac?.id ?? ''} />
            </div>
          ))}

        <div className="flex items-center gap-3">
          <Button type="button" onClick={addPlan}>
            Tambah
          </Button>
          {tacs && tacs?.length > 1 && (
            <Button type="button" variant={'destructive'} onClick={removePlan}>
              Hapus
            </Button>
          )}
        </div>
      </Card>
    </section>
  );
}
