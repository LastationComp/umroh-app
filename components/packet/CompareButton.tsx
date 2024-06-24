import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { checkCompare, Compare } from "./action";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useComparison } from "@/lib/Zustands/User/Comparison";

interface CompareProps {
  id?: string;
  slug?: string;
  title?: string;
  compared?: boolean;
}
export default function CompareButton({
  id,
  slug,
  title,
  compared = false,
}: CompareProps) {
  const [isCompared, setIsCompared] = useState(compared);
  const [openDialog, setOpenDialog] = useState(false);
  const { incCount, decCount } = useComparison();
  const pathname = usePathname();
  const handleButton = async () => {
    const result = await checkCompare(pathname + "/" + slug);
    if (!result) return;
    if (!isCompared) {
      Compare(pathname + "/" + slug, id, "attachment");
      incCount();
    }
    if (isCompared) {
      Compare(pathname + "/" + slug, id, "detachment");
      decCount();
    }

    setIsCompared(!isCompared);
    if (isCompared) return;

    return setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <section>
      <Dialog open={openDialog} onOpenChange={setOpenDialog} key={id}>
        <DialogContent className="max-w-lg scale-90 flex flex-col justify-center items-center">
          <DialogHeader className="flex flex-col items-center">
            <DialogTitle>Paket Berhasil Ditambahkan!</DialogTitle>
            <p className="line-clamp-1">{title}</p>
          </DialogHeader>
          <div className="flex gap-3">
            <Button onClick={handleCloseDialog}>Lanjut Mencari Paket</Button>
            <Button variant={"outline"} asChild>
              <Link href={"/perbandingan"}>Ke Perbandingan Paket</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={isCompared ? "default" : "outline"}
              onClick={handleButton}
            >
              <FontAwesomeIcon icon={faRightLeft} />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-blue-dark">
            <p>Bandingkan</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </section>
  );
}
