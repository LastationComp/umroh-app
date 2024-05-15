"use client";
import { createContext, useState } from "react";
import Swal from "sweetalert2";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { delay } from "@/lib/Promise/Delay";

type alertProps = {
  title?: string | null;
  text?: string | null;
  icon?: "error" | "success" | "warning" | "question" | null;
  confirmButtonText?: string | null;
  cancelButtonText?: string | null;
  onSuccess?: () => void;
  onCancel?: () => void;
};

const SAlertProps: alertProps = {
  title: null,
  text: null,
  icon: null,
  confirmButtonText: null,
  cancelButtonText: null,
  onSuccess: () => {},
  onCancel: () => {},
};
const SAlertContext = createContext({
  trigger: ({}: alertProps) => {},
  onSuccess: async () => {},
});

const showAlert = ({
  title = "Apakah anda yakin?",
  text,
  icon = "error",
  confirmButtonText = "Oke",
  cancelButtonText = null,
  onSuccess,
  onCancel,
}: alertProps) => {
  return Swal.fire({
    title: `<span class="text-lg">${title ?? ""}</button`,
    text: text ?? "",
    html: `<span class="text-black/50 text-sm font-small">${
      text ?? ""
    }</button`,
    icon: icon ?? "error",
    showConfirmButton: confirmButtonText !== null,
    showCancelButton: cancelButtonText !== null,
    confirmButtonText: confirmButtonText ?? "",
    cancelButtonText: cancelButtonText ?? "",
    confirmButtonColor: "#2c3442",
    cancelButtonColor: "#747576",
    buttonsStyling: true,
  }).then((result) => {
    if (result.isConfirmed) return onSuccess ? onSuccess() : null;

    return onCancel ? onCancel() : null;
  });
};

const SAlert = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [icon, setIcon] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const [cancelText, setCancelText] = useState("");
  const [actions, setActions]: any = useState({
    success: async () => {},
    cancel: async () => {},
  });
  const trigger = ({
    title = "Apakah anda yakin?",
    text,
    icon = "error",
    confirmButtonText = "Ya",
    cancelButtonText = null,
    onSuccess,
    onCancel,
  }: alertProps) => {
    setOpen(true);
    setTitle(title ?? "");
    setText(text ?? "");
    setIcon(icon ?? "warning");
    setConfirmText(confirmButtonText ?? "Ya");
    setCancelText(cancelButtonText ?? "");
    setActions({
      success: onSuccess,
      cancel: onCancel,
    });
  };

  const getColor = (variant: string = "warning") => {
    const outline = "outline outline-1";
    let final = "";
    if (variant === "warning") final = "outline-yellow-600 text-yellow-600";

    if (variant === "error") final = "outline-red-600";

    if (variant === "success") final = "outline-green-600 text-green-600";

    return cn(outline, final);
  };

  const onSuccess = async () => {
    await actions.success();
  };

  const cancel = async () => {
    if (actions.cancel) await actions.cancel();
  };

  return (
    <SAlertContext.Provider value={{ trigger, onSuccess }}>
      {children}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className={getColor(icon)}>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{text}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {cancelText && (
              <AlertDialogCancel onClick={cancel} className="text-black">
                {cancelText ?? "Batal"}
              </AlertDialogCancel>
            )}
            <AlertDialogAction onClick={onSuccess}>
              {confirmText}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SAlertContext.Provider>
  );
};

export { showAlert, SAlert };

export default SAlertContext;
