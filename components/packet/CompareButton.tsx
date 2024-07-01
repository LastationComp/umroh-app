"use client";
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
import { usePathname, useRouter } from "next/navigation";
import { checkCompare, Compare } from "./action";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useComparison } from "@/lib/Zustands/User/Comparison";
import nProgress from "nprogress";

interface CompareProps {
  id?: string;
  slug?: string;
  title?: string;
  compared?: boolean;
  logged?: boolean;
  children?: React.ReactNode;
}
export default function CompareButton({
  id,
  slug,
  title,
  compared = false,
  logged = false,
  children,
}: CompareProps) {
  const [isCompared, setIsCompared] = useState(compared);
  const [openDialog, setOpenDialog] = useState(false);
  const { incCount, decCount } = useComparison();
  const pathname = usePathname();
  const router = useRouter();
  const handleButton = async () => {
    if (!logged) {
      nProgress.start();
      return router.push("/masuk");
    }
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
          <div className="flex gap-3 max-md:flex-col">
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
              className="flex items-center justify-center gap-1.5"
              onClick={handleButton}
            >
              <FontAwesomeIcon icon={faRightLeft} />
              {children}
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
