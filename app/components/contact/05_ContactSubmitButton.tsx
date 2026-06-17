"use client";

import NeonButton from "../ui/NeonButton";

type ContactSubmitButtonProps = {
  loading: boolean;
  label: string;
  loadingLabel: string;
};

export default function ContactSubmitButton({
  loading,
  label,
  loadingLabel,
}: ContactSubmitButtonProps) {
  return (
    <NeonButton type="submit" loading={loading}>
      <span className="flex items-center justify-center gap-4">
        {loading ? loadingLabel : label}
        {!loading && <span>→</span>}
      </span>
    </NeonButton>
  );
}
